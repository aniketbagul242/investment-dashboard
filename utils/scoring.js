export const calculateScore = (deal, investor) => {
  let score = 0;

  if (investor.preferredIndustries.includes(deal.industry)) {
    score += 40;
  }

  if (deal.risk === investor.riskPreference) {
    score += 30;
  }

  if (deal.roi > 15) {
    score += 30;
  }

  return score;
};