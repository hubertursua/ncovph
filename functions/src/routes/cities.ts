import Cities from 'ncovph-parser/dist/consts/Cities';

export const path = '/cities';

export const handler = async (req, res): Promise<void> => {
  res.json(Cities);
};
