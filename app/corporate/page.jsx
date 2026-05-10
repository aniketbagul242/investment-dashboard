"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import DashboardLayout from "../../components/layout/DashboardLayout";

export default function CorporatePage() {
  const fundingData = [
    { month: "Jan", value: 200000 },
    { month: "Feb", value: 400000 },
    { month: "Mar", value: 300000 },
    { month: "Apr", value: 500000 },
  ];

  const conversionData = [
    { name: "Converted", value: 60 },
    { name: "Not Converted", value: 40 },
  ];

  const COLORS = ["#4F46E5", "#E5E7EB"];

  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">
        Corporate Analytics
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Total Funding Raised</p>
          <h3 className="text-xl font-bold mt-2">₹10,00,000</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Investor Count</p>
          <h3 className="text-xl font-bold mt-2">120</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-gray-500 text-sm">Conversion Rate</p>
          <h3 className="text-xl font-bold mt-2">12%</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm h-[300px] min-h-0 w-full flex flex-col">
          <h3 className="font-semibold mb-4">Funding Trend</h3>

          <div className="relative w-full flex-1">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <LineChart data={fundingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm h-[300px] min-h-0 w-full flex flex-col">
          <h3 className="font-semibold mb-4">Conversion Split</h3>

          <div className="relative w-full flex-1">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
              <PieChart>
                <Pie
                  data={conversionData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                >
                  {conversionData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}