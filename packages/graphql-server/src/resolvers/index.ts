import { Resolvers } from '@mqs/graphql-schema';
import { prisma } from '@mqs/prisma/client';

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
      const authorization = context.request.headers.get('authorization');

      if (!authorization) {
        return null;
      }

      const [_, token] = authorization.split(' ');

      if (typeof token !== 'string') {
        return null;
      }

      const jwt = await prisma.jwt.findFirstOrThrow({
        select: {
          user: true,
        },
        where: {
          value: token,
        },
      });

      return coercePrismaObjectForGraphQL(jwt.user);
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
