"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Button from "../../components/ui/Button";


export default function InvestmentsPage() {
  const [investments, setInvestments] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("investments")
      ) || [];

    setInvestments(saved);
  }, []);

  const removeInvestment = (id) => {
    const updated = investments.filter(
      (item) => item.id !== id
    );

    setInvestments(updated);

    localStorage.setItem(
      "investments",
      JSON.stringify(updated)
    );
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          My Investments
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Saved interested deals
        </p>
      </div>

      {investments.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500">
            No investments added yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {investments.map((deal) => (
            <div
              key={deal.id}
              className="bg-white p-5 rounded-xl shadow-sm"
            >
              <h2 className="text-xl font-semibold">
                {deal.company}
              </h2>

              <p className="text-gray-500 mt-1">
                {deal.industry}
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <span>
                  ROI: {deal.roi}%
                </span>

                <span className="capitalize">
                  Risk: {deal.risk}
                </span>
              </div>

              <div className="mt-4">
                <Button className="cursor-pointer"
                  onClick={() =>
                    removeInvestment(deal.id)
                  }
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}