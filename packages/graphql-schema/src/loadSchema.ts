import { readFileSync } from 'fs';
import { buildSchema } from 'graphql';

const schema = readFileSync(
  require.resolve('./schema/schema.graphql'),
  {
    encoding: 'utf-8',
  },
);

export default function loadSchema() {
  return buildSchema(schema);
}
