import { Resolvers } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';

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
      const cookies = context.request.headers.get('cookie');

      if (!cookies) {
        return null;
      }

      const { access } = cookie.parse(cookies);

      if (!access) {
        return null;
      }

      const accessToken = await Tokens.verifyAccessToken(access);

      return coercePrismaObjectForGraphQL(accessToken.user);
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
