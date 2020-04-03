import Hospitals from '../consts/Hospitals';

export const path = '/hospitals';

export const handler = async (req, res): Promise<void> => {
  res.json(Hospitals);
};
