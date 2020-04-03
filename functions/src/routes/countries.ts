import Countries from '../consts/Countries';

export const path = '/countries';

export const handler = async (req, res): Promise<void> => {
  res.json(Countries);
};
