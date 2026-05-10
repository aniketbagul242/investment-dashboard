
export const matchInvestorsToDeal = (deal, investors) => {
  return investors.map((inv) => {
    let score = 0;

    if (inv.preferredIndustries.includes(deal.industry)) {
      score += 40;
    }

    if (inv.riskPreference === deal.risk) {
      score += 30;
    }

    const withinBudget =
      deal.maxInvestment <= inv.budget;

    if (withinBudget) {
      score += 30;
    }

    return {
      investor: inv,
      matchScore: score,
    };
  });
};