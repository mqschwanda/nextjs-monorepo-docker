import { IncomingMessage, ServerResponse } from 'http';
import { graphqlHTTP } from 'express-graphql';
// import loadSchema from 'graphql-schema/loadSchema';
import loadSchema from 'graphql-schema/dist/loadSchema';

const schema = loadSchema();

// The root provides a resolver function for each API endpoint
const rootValue = {
  hello: (req: IncomingMessage, res: ServerResponse) => `Hello ${res.body.variables.name}`,
};

export default function graphqlServer() {
  return graphqlHTTP({
    graphiql: true,
    rootValue,
    schema,
  });
}
