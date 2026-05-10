export const searchDeals = (deals, query) => {
  if (!query) return deals;

  return deals.filter((deal) =>
    deal.company.toLowerCase().includes(query.toLowerCase())
  );
};