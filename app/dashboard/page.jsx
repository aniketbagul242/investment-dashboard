"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import StatsCard from "../../components/cards/StatsCard";
import { getAnalytics } from "../../services/analyticsService";
import ROIChart from "../../components/charts/ROIChart";
import RiskPieChart from "../../components/charts/RiskPieChart";
import GrowthChart from "../../components/charts/GrowthChart";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    getAnalytics().then(setData);
    setMounted(true);
  }, []);

  if (!data) {
    return (
      <DashboardLayout>
        <p className="p-6">Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Investor Dashboard
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          Track investments, ROI, and deal performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatsCard title="Total Deals" value={data.totalDeals} />

        <StatsCard title="Avg ROI" value={`${data.avgROI}%`} />

        <StatsCard
          title="Total Investment"
          value={`₹${data.totalInvestment}`}
        />
      </div>

      {/* Charts (SAFE MOUNTING FIX APPLIED) */}
      {mounted && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <ROIChart />
            <GrowthChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <RiskPieChart />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}