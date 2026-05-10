"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center px-3 py-2 rounded-md transition ${
      pathname === path
        ? "text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600"
        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
    }`;

  return (
    <div className="w-64 bg-white border-r p-5 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">InvestPro</h2>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>

        <Link href="/deals" className={linkClass("/deals")}>
          Deals
        </Link>

        <Link href="/investments" className={linkClass("/investments")}>
          Investments
        </Link>

        <Link href="/corporate" className={linkClass("/corporate")}>
          Corporate
        </Link>
      </nav>
    </div>
  );
}