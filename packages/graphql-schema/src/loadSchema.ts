import { readFileSync } from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { buildSchema } from 'graphql';
import { schemaGlob } from './constants';

const filePaths = globSync(path.join(__dirname, schemaGlob));

const schema = filePaths.map(
  (filePath) => readFileSync(
    filePath,
    {
      encoding: 'utf-8',
    },
  ),
).join(' ');

export default function loadSchema() {
  return buildSchema(schema);
}
