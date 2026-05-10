"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", investment: 20000 },
  { month: "Feb", investment: 35000 },
  { month: "Mar", investment: 50000 },
  { month: "Apr", investment: 42000 },
  { month: "May", investment: 65000 },
];

export default function GrowthChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-80 min-h-0 w-full flex flex-col">
      <h3 className="text-sm font-semibold text-gray-600 mb-4">
        Investment Growth
      </h3>

      {/* IMPORTANT WRAPPER */}
      <div className="relative w-full flex-1">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="investment" fill="#111827" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}