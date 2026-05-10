
export const scoreDeals = (deals, investor) => {
  return deals
    .map((deal) => {
      let score = 0;

      // Industry match
      if (investor.preferredIndustries.includes(deal.industry)) {
        score += 40;
      }

      // Risk match
      if (deal.risk === investor.riskPreference) {
        score += 30;
      }

      // ROI attractiveness
      if (deal.roi >= 15) {
        score += 20;
      }

      // Budget compatibility
      if (deal.maxInvestment <= investor.budget) {
        score += 10;
      }

      return {
        ...deal,
        score,
      };
    })
    .sort((a, b) => b.score - a.score);
};