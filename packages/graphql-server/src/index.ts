import { graphqlHTTP } from 'express-graphql';
import { schema } from 'graphql-schema';

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: (_parent, args, _context, _info) => `Hello ${args.body.variables.name}`,
};

export default function graphqlServer() {
  return graphqlHTTP({
    graphiql: true,
    rootValue,
    schema,
  });
}
