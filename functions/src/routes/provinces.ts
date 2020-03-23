import Provinces from "../consts/Provinces";

export const path = "/provinces";

export const handler = async (req, res) => {
  res.json(Provinces);
};
