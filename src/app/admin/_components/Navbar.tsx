import Link from "next/link";
import { PiPowerBold } from "react-icons/pi";

export function Navbar() {
  return (
    <div className="navbar bg-base-300 font-bold">
      <div className="flex-1">
        <Link href="/admin" className="btn btn-ghost text-2xl">
          eestetik
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/products">Products</Link>
          </li>
          <li>
            <Link href="/admin/users">Users</Link>
          </li>
          <li>
            <Link href="/admin/sales">Sales</Link>
          </li>
        </ul>
        <button className="btn btn-ghost">
          <PiPowerBold className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
