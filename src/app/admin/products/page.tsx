import db from "@/db/db";
import Link from "next/link";

import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import { PiTrashBold } from "react-icons/pi";

export default async function Products() {
  const products = await db.product.findMany(
    {
      select: {
        id: true,
        name: true,
        price: true,
        description: true,
        imagePath: true,
      }, orderBy: {name: "desc"}
    }
  )

  return (
    <div className="grid justify-center items-center text-center font-bold">
      <Link className="btn btn-ghost" href="/admin/products/new">
        Add Product
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.imagePath}</td>
              <td>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn m-1">
                    <PiDotsThreeOutlineVerticalBold/>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                      <a>
                        Edit
                        <PiNotePencilBold/>
                      </a>
                      <a>
                        Delete
                        <PiTrashBold />
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
