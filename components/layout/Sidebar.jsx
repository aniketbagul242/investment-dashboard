import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-5 min-h-screen">
      <h2 className="text-2xl font-bold mb-8">
        InvestPro
      </h2>

      <nav className="flex flex-col gap-4 text-gray-700">
        <Link
          href="/dashboard"
          className="hover:text-black transition"
        >
          Dashboard
        </Link>

        <Link
          href="/deals"
          className="hover:text-black transition"
        >
          Deals
        </Link>

        <Link
          href="/investments"
          className="hover:text-black transition"
        >
          Investments
        </Link>

        <Link
          href="/corporate"
          className="hover:text-black transition"
        >
          Corporate
        </Link>
      </nav>
    </div>
  );
}