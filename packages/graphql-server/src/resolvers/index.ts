import { Resolvers } from 'graphql-schema';

const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
  },
};

export default resolvers;
