export default function InvestorsTable({ investors }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Budget</th>
            <th className="p-3">Risk Preference</th>
          </tr>
        </thead>

        <tbody>
          {investors.map((inv) => (
            <tr key={inv.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{inv.name}</td>
              <td className="p-3">₹{inv.budget.toLocaleString()}</td>
              <td className="p-3 capitalize">{inv.riskPreference}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}