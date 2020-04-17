import cors from 'cors';

const options = {
  origin: '*',
  optionsSuccessStatus: 200,
};

// eslint-disable-next-line import/prefer-default-export
export const handler = cors(options);
