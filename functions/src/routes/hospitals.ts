import hospitals from "../consts/Hospitals";

export const path = "/hospitals";

export const handler = async (req, res) => {
  res.json(hospitals);
};
