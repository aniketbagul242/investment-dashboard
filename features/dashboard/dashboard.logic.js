
export const calculateDashboardStats = (deals) => {
  const totalDeals = deals.length;

  const totalInvestment = deals.reduce(
    (sum, d) => sum + (d.maxInvestment || 0),
    0
  );

  const avgROI = totalDeals
    ? (
        deals.reduce((sum, d) => sum + d.roi, 0) / totalDeals
      ).toFixed(2)
    : 0;

  const riskDistribution = deals.reduce(
    (acc, d) => {
      acc[d.risk] = (acc[d.risk] || 0) + 1;
      return acc;
    },
    { low: 0, medium: 0, high: 0 }
  );

  return {
    totalDeals,
    totalInvestment,
    avgROI,
    riskDistribution,
  };
};