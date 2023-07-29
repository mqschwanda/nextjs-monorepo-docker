import { Resolvers } from '@mqs/graphql-schema';
import { prisma } from '@mqs/prisma/client';
import cookie from 'cookie';

function coercePrismaObjectForGraphQL<Obj extends Record<string, any> & { id: number }>(obj: Obj) {
  return {
    ...obj,
    id: String(obj.id),
  };
}

const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
    me: async (_parent, _args, context, _info) => {
      const { token } = cookie.parse(context.request.headers.get('cookie'));

      if (!token) {
        return null;
      }

      const authenticationToken = await prisma.authenticationToken.findFirstOrThrow({
        select: {
          user: true,
        },
        where: {
          value: token,
        },
      });

      return coercePrismaObjectForGraphQL(authenticationToken.user);
    },
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
