import db from "@/db/db";
import Link from "next/link";

import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { PiNotePencilBold } from "react-icons/pi";
import { PiTrashBold } from "react-icons/pi";

export default async function Users() {

  const users = await db.user.findMany(
    {
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        telephoneNumber: true,
      }, orderBy: {name: "desc"}
    }
  )

  return (
    <div className="grid justify-center items-center text-center font-bold">
      <Link className="btn btn-ghost" href="/admin/users/new">Add User</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Telephone Number</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.telephoneNumber}</td>
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
