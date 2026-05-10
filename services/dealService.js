import deals from "@/data/deals.json";

const delay = (ms) =>
  new Promise((res) => setTimeout(res, ms));

// Get all deals (stable - no random failure)
export const getDeals = async () => {
  await delay(600);
  return deals;
};

// Get single deal
export const getDealById = async (id) => {
  await delay(400);

  return deals.find((d) => d.id.toString() === id);
};

// Filter deals
export const filterDeals = async (filters = {}) => {
  await delay(500);

  let result = [...deals];

  // Industry filter
  if (filters.industry) {
    result = result.filter(
      (d) => d.industry === filters.industry
    );
  }

  // Risk filter
  if (filters.risk) {
    result = result.filter(
      (d) => d.risk === filters.risk
    );
  }

  // ROI filter
  if (filters.minROI) {
    result = result.filter(
      (d) => d.roi >= Number(filters.minROI)
    );
  }

  return result;
};