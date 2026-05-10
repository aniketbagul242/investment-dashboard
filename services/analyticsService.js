import deals from "@/data/deals.json";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getAnalytics = async () => {
  await delay(600);

  const totalDeals = deals.length;

  const totalROI = deals.reduce((sum, d) => sum + d.roi, 0);
  const avgROI = totalDeals ? (totalROI / totalDeals).toFixed(2) : 0;

  const riskDistribution = deals.reduce(
    (acc, d) => {
      acc[d.risk] = (acc[d.risk] || 0) + 1;
      return acc;
    },
    { low: 0, medium: 0, high: 0 }
  );

  const totalInvestment = deals.reduce(
    (sum, d) => sum + d.maxInvestment,
    0
  );

  return {
    totalDeals,
    avgROI,
    riskDistribution,
    totalInvestment,
  };
};