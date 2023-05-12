import { Resolvers } from '@mqs/graphql-schema';

const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
  },
  Subscription: {
    countdown: {
      async* subscribe(_parent, args, _context, _info) {
        for (let i = args.from; i >= 0; i--) {
          // eslint-disable-next-line no-await-in-loop
          await new Promise((resolve) => {
            setTimeout(resolve, 1000);
          });
          yield { countdown: i };
        }
      },
    },
  },
};

export default resolvers;
