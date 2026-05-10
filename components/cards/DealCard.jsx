
export default function DealCard({ deal }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="font-semibold">{deal.company}</h3>

      <p className="text-sm text-gray-500">
        {deal.industry}
      </p>

      <div className="mt-2 flex justify-between text-sm">
        <span>ROI: {deal.roi}%</span>
        <span className="capitalize">{deal.risk}</span>
      </div>
    </div>
  );
}