import Regions from "../consts/Regions";

export const path = "/regions";

export const handler = async (req, res) => {
  res.json(Regions);
};
