import Nationalities from 'ncovph-parser/src/consts/Nationalities';

export const path = '/nationalities';

export const handler = async (req, res): Promise<void> => {
  res.json(Nationalities);
};
