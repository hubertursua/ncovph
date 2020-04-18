import fs from 'fs';
import glob from 'glob';

const files = glob.sync(`${__dirname}/**/*.graphql`);

const typeDefs = files
  .map((file) => fs.readFileSync(file, { encoding: 'utf8' }).trim())
  .join('\n\n');

export default typeDefs;
