export const formatCurrency = (value) => {
  return `₹${value.toLocaleString()}`;
};

export const formatPercent = (value) => {
  return `${value}%`;
};