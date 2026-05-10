
export function filterDeals(deals, filters) {
  return deals.filter((deal) => {
    // Risk filter
    const riskMatch =
      !filters.risk ||
      deal.risk === filters.risk;

    // Industry filter
    const industryMatch =
      !filters.industry ||
      deal.industry === filters.industry;

    // ROI filter
    const roiMatch =
      !filters.minROI ||
      deal.roi >= Number(filters.minROI);

    return (
      riskMatch &&
      industryMatch &&
      roiMatch
    );
  });
}