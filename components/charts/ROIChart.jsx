"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", roi: 8 },
  { month: "Feb", roi: 12 },
  { month: "Mar", roi: 15 },
  { month: "Apr", roi: 18 },
  { month: "May", roi: 22 },
];

export default function ROIChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-80 min-h-0 w-full flex flex-col">
      <h3 className="text-sm font-semibold text-gray-600 mb-4">
        ROI Performance
      </h3>

      {/* IMPORTANT WRAPPER */}
      <div className="relative w-full flex-1">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="roi"
              stroke="#000"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}