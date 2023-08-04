import child_process from 'child_process';
import { JobKey, Resolvers, RoleKey } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { prisma } from '@mqs/prisma/client';
import DateScalar from './scalars/Date';

function argvStringFromObject(argv: Record<string, any>) {
  return Object
    .keys(argv)
    .reduce(
      (previousValue, currentValue) => [
        ...previousValue,
        `--${currentValue}=${argv[currentValue]}`,
      ],
      [] as Array<string>,
    );
}

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

      child_process.fork(
        require.resolve('@mqs/jobs/cli/cancel'),
        argvStringFromObject({ key }),
      );

      return {
        ...coercePrismaObjectForGraphQL(job),
        key: job.key as JobKey,
        ranJob: ranJob ? coercePrismaObjectForGraphQL(ranJob) : undefined,
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

      child_process.fork(
        require.resolve('@mqs/jobs/cli/run'),
        argvStringFromObject({ key }),
      );

      return {
        ...coercePrismaObjectForGraphQL(job),
        key: job.key as JobKey,
        ranJob: ranJob ? coercePrismaObjectForGraphQL(ranJob) : undefined,
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
        key: job.key as JobKey,
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
          key: job.key as JobKey,
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
        roleKeys: accessToken.user.roles.map((({ role }) => role.key as RoleKey)),
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
