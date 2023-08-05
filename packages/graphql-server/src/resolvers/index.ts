import { Resolvers } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { prisma } from '@mqs/prisma/client';
import * as mqsJobs from '@mqs/jobs';
import DateScalar from './scalars/Date';

function coercePrismaObjectForGraphQL<Obj extends Record<string, any> & { id: number }>(obj: Obj) {
  return {
    ...obj,
    id: String(obj.id),
  };
}

const resolvers: Resolvers = {
  Date: DateScalar,
  Mutation: {
    cancelJob: async (_parent, args, context, _info) => {
      const cookies = context.request.headers.get('cookie');

      if (!cookies) {
        throw new Error('an unexpected error occurred');
      }

      const { access } = cookie.parse(cookies);

      if (!access) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.verifyAccessToken(access);

      const {
        key,
      } = args;

      const job = await prisma.job.findUniqueOrThrow({
        where: {
          key,
        },
      });

      mqsJobs.cancel({ key });

      return {
        ...coercePrismaObjectForGraphQL(job),
        key: job.key,
      };
    },
    runJob: async (_parent, args, context, _info) => {
      const cookies = context.request.headers.get('cookie');

      if (!cookies) {
        throw new Error('an unexpected error occurred');
      }

      const { access } = cookie.parse(cookies);

      if (!access) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.verifyAccessToken(access);

      const {
        key,
      } = args;

      const job = await prisma.job.findUniqueOrThrow({
        where: {
          key,
        },
      });

      mqsJobs.start({ key });

      return {
        ...coercePrismaObjectForGraphQL(job),
        key: job.key,
      };
    },
  },
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
    job: async (_parent, args, context, _info) => {
      const cookies = context.request.headers.get('cookie');

      if (!cookies) {
        throw new Error('an unexpected error occurred');
      }

      const { access } = cookie.parse(cookies);

      if (!access) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.verifyAccessToken(access);

      const {
        key,
      } = args;

      const job = await prisma.job.findUniqueOrThrow({
        select: {
          id: true,
          key: true,
          name: true,
          ranJobs: {
            orderBy: {
              startedAt: 'desc',
            },
            take: 1,
          },
        },
        where: {
          key,
        },
      });

      const [ranJob] = job.ranJobs;

      return coercePrismaObjectForGraphQL({
        ...job,
        key: job.key,
        ranJob: coercePrismaObjectForGraphQL(ranJob),
      });
    },
    jobs: async (_parent, _args, context, _info) => {
      const cookies = context.request.headers.get('cookie');

      if (!cookies) {
        throw new Error('an unexpected error occurred');
      }

      const { access } = cookie.parse(cookies);

      if (!access) {
        throw new Error('an unexpected error occurred');
      }

      await Tokens.verifyAccessToken(access);

      const jobs = await prisma.job.findMany({
        select: {
          id: true,
          key: true,
          name: true,
          ranJobs: {
            orderBy: {
              startedAt: 'desc',
            },
            take: 1,
          },
        },
      });

      return jobs.map((job) => {
        const [ranJob] = job.ranJobs;

        return coercePrismaObjectForGraphQL({
          ...job,
          key: job.key,
          ranJob: coercePrismaObjectForGraphQL(ranJob),
        });
      });
    },
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

      const user = {
        ...accessToken.user,
        roleKeys: accessToken.user.roles.map((({ role }) => role.key)),
      };

      return coercePrismaObjectForGraphQL(user);
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
