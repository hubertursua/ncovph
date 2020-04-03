import Regions from '../consts/Regions';

export const path = '/regions';

export const handler = async (req, res): Promise<void> => {
  res.json(Regions);
};
