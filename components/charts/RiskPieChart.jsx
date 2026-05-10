"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Low", value: 40 },
  { name: "Medium", value: 35 },
  { name: "High", value: 25 },
];

const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

export default function RiskPieChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm h-80 min-h-0 w-full flex flex-col">
      <h3 className="text-sm font-semibold text-gray-600 mb-4">
        Risk Distribution
      </h3>

      {/* IMPORTANT WRAPPER */}
      <div className="relative w-full flex-1">
        <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
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
  );
}