import { Resolvers } from '@mqs/graphql-schema';
import { prisma } from '@mqs/prisma/client';
import * as mqsJobs from '@mqs/jobs';
import { ContextType } from 'context';
import DateScalar from './scalars/Date';
import { authenticate, compose } from './middleware';

const resolvers: Resolvers<ContextType> = {
  Date: DateScalar,
  Mutation: {
    cancelJob: compose(
      authenticate(),
    )(
      async (_parent, args, _context, _info) => {
        const {
          key,
        } = args;

        const job = await prisma.job.findFirstOrThrow({
          orderBy: {
            startedAt: 'desc',
          },
          where: {
            key,
          },
        });

        mqsJobs.cancel({ key });

        const { name } = mqsJobs.jobs[key];

        return {
          name,
          ...job,
        };
      },
    ),
    runJob: compose(
      authenticate(),
    )(
      async (_parent, args, _context, _info) => {
        const {
          key,
        } = args;

        const job = await prisma.job.findFirstOrThrow({
          orderBy: {
            startedAt: 'desc',
          },
          where: {
            key,
          },
        });

        mqsJobs.start({ key });

        const { name } = mqsJobs.jobs[key];

        return {
          name,
          ...job,
        };
      },
    ),
  },
  Query: {
    hello: (_parent, args, _context, _info) => `Hello ${args.name}`,
    job: compose(
      authenticate(),
    )(
      async (_parent, args, _context, _info) => {
        const {
          key,
        } = args;

        const job = await prisma.job.findFirstOrThrow({
          orderBy: {
            startedAt: 'desc',
          },
          take: 1,
          where: {
            key,
          },
        });

        const { name } = mqsJobs.jobs[key];

        return {
          name,
          ...job,
        };
      },
    ),
    jobs: compose(
      authenticate(),
    )(
      async (_parent, _args, _context, _info) => {
        const jobs = await prisma.job.findMany({
          orderBy: {
            startedAt: 'desc',
          },
        });

        return jobs.map((job) => {
          const { name } = mqsJobs.jobs[job.key];

          return {
            name,
            ...job,
          };
        });
      },
    ),
    me: compose(
      authenticate({
        throwErrors: false,
      }),
    )(
      async (_parent, _args, context, _info) => {
        if (!context.user) {
          return null;
        }

        return {
          ...context.user,
          roleKeys: context.user.roles.map((({ role }) => role.key)),
        };
      },
    ),
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
