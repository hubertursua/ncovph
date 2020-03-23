import Cities from "../consts/Cities";

export const path = "/cities";

export const handler = async (req, res) => {
  res.json(Cities);
};
