"use client";

import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1 text-sm rounded-md transition ${
              active === i
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4">{tabs[active].content}</div>
    </div>
  );
}