import Provinces from '../consts/Provinces';

export const path = '/provinces';

export const handler = async (req, res): Promise<void> => {
  res.json(Provinces);
};
