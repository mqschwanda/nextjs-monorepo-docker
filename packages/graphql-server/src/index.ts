import { graphqlHTTP } from 'express-graphql';
import schema from 'graphql-schema';

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => 'Hello world!',
};

export default function graphqlServer() {
  return graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema,
  });
}
