import Countries from "../consts/Countries";

export const path = "/countries";

export const handler = async (req, res) => {
  res.json(Countries);
};
