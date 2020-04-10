import Cities from 'ncovph-parser/src/consts/Cities';

export const path = '/cities';

export const handler = async (req, res): Promise<void> => {
  res.json(Cities);
};
