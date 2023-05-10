import { createHandler } from 'graphql-http/lib/use/express';
import loadSchema from 'graphql-schema/loadSchema';
import { makeExecutableSchema } from 'graphql-tools';
import { Resolvers } from 'graphql-schema';

const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
  },
};

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: loadSchema(),
});

export default function graphqlServer() {
  return createHandler({
    schema,
  });
}
