import { buildSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

export default schema;
