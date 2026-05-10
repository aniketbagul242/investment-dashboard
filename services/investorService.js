
import investors from "@/data/investors.json";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getInvestors = async () => {
  await delay(400);
  return investors;
};