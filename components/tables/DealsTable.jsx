
"use client";

import { useState } from "react";
import Link from "next/link";

export default function DealsTable({ deals }) {
  const [savedIds, setSavedIds] = useState([]);

  const saveInvestment = (deal) => {
    const saved =
      JSON.parse(localStorage.getItem("investments")) || [];

    const alreadyExists = saved.find(
      (item) => item.id === deal.id
    );

    if (!alreadyExists) {
      saved.push(deal);
      localStorage.setItem(
        "investments",
        JSON.stringify(saved)
      );
    }

    setSavedIds((prev) => [...prev, deal.id]);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-4 font-semibold">Company</th>
            <th className="p-4 font-semibold">Industry</th>
            <th className="p-4 font-semibold">ROI</th>
            <th className="p-4 font-semibold">Risk</th>
            <th className="p-4 font-semibold">Action</th>
          </tr>
        </thead>

        <tbody>
          {deals.map((d) => (
            <tr
              key={d.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-4 font-medium whitespace-nowrap">
                <Link
                  href={`/deals/${d.id}`}
                  className="hover:underline"
                >
                  {d.company}
                </Link>
              </td>

              <td className="p-4 text-gray-600">
                {d.industry}
              </td>

              <td className="p-4 font-medium">
                {d.roi}%
              </td>

              <td className="p-4">
                <span className="capitalize px-2 py-1 rounded-md bg-gray-100 text-xs">
                  {d.risk}
                </span>
              </td>

              <td className="p-4">
                <button
                  onClick={() => saveInvestment(d)}
                  className={`px-3 py-1 rounded-lg text-xs transition cursor-pointer ${
                    savedIds.includes(d.id)
                      ? "bg-green-500 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {savedIds.includes(d.id)
                    ? "Saved"
                    : "Save"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}