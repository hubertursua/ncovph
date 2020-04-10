import Countries from 'ncovph-parser/dist/consts/Countries';

export const path = '/countries';

export const handler = async (req, res): Promise<void> => {
  res.json(Countries);
};
