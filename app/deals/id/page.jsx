"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import { getDealById } from "../../../services/dealService";
import Loader from "../../../components/ui/Loader";
import Tabs from "../../../components/ui/Tabs";
import ROIChart from "../../../components/charts/ROIChart";
import Button from "../../../components/ui/Button";



export default function DealDetailsPage() {
  const { id } = useParams();

  const [deal, setDeal] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const data = await getDealById(id);

      setDeal(data);

      setLoading(false);
    };

    load();
  }, [id]);

  // Save interest
  const handleInterest = () => {
    const saved =
      JSON.parse(
        localStorage.getItem("investments")
      ) || [];

    const alreadyExists = saved.find(
      (item) => item.id === deal.id
    );

    if (alreadyExists) {
      alert("Already added");
      return;
    }

    saved.push(deal);

    localStorage.setItem(
      "investments",
      JSON.stringify(saved)
    );

    alert("Added to investments");
  };

  if (loading) {
    return (
      <DashboardLayout>
        <Loader />
      </DashboardLayout>
    );
  }

  if (!deal) {
    return (
      <DashboardLayout>
        <p>Deal not found</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            {deal.company}
          </h1>

          <p className="text-gray-500 mt-1">
            {deal.industry}
          </p>
        </div>

        <Button onClick={handleInterest}>
          Interested
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">
            ROI
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {deal.roi}%
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">
            Risk Level
          </p>

          <h3 className="text-2xl font-bold mt-2 capitalize">
            {deal.risk}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">
            Investment Range
          </p>

          <h3 className="text-2xl font-bold mt-2">
            ₹{deal.minInvestment}
          </h3>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <ROIChart />
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          {
            label: "Overview",
            content: (
              <div>
                <p className="text-gray-600 leading-7">
                  {deal.company} is a growing{" "}
                  {deal.industry} company with
                  strong ROI potential and
                  expanding market reach.
                </p>
              </div>
            ),
          },

          {
            label: "Risk Analysis",
            content: (
              <div>
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">
                    Risk Assessment
                  </h3>

                  <p className="text-sm text-gray-600">
                    This deal has a{" "}
                    <span className="font-semibold capitalize">
                      {deal.risk}
                    </span>{" "}
                    risk profile.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
      />
    </DashboardLayout>
  );
}