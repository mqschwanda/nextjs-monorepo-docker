import { Resolvers } from '@mqs/graphql-schema';
import { RoleKey, prisma } from '@mqs/prisma/client';
import { ContextType } from 'context';
import { DateScalar, JSONScalar } from './scalars';
import { authenticate, compose, userContext } from './middleware';

const resolvers: Resolvers<ContextType> = {
  Date: DateScalar,
  JSON: JSONScalar,
  Mutation: {
    cancelJob: compose(
      authenticate({
        roles: [
          RoleKey.Admin,
        ],
      }),
    )(
      async (_parent, args, context, _info) => {
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

        context.jobs[key].cancel();
        const { name } = context.jobs[key];

        return {
          name,
          ...job,
        };
      },
    ),
    createLog: async (_parent, args, _context, _info) => {
      const {
        input,
      } = args;

      // TODO: handle serialize JSON
      const payload = input.payload
        ? JSON.parse(JSON.stringify(input.payload))
        : undefined;

      const log = await prisma.log.create({
        data: {
          ...input,
          payload,
        },
      });

      return log;
    },
    runJob: compose(
      authenticate({
        roles: [
          RoleKey.Admin,
        ],
      }),
    )(
      async (_parent, args, context, _info) => {
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

        context.jobs[key].run();
        const { name } = context.jobs[key];

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
      authenticate({
        roles: [
          RoleKey.Admin,
        ],
      }),
    )(
      async (_parent, args, context, _info) => {
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

        const { name } = context.jobs[key];

        return {
          name,
          ...job,
        };
      },
    ),
    jobs: compose(
      authenticate({
        roles: [
          RoleKey.Admin,
        ],
      }),
    )(
      async (_parent, _args, context, _info) => {
        const jobs = await prisma.job.findMany({
          orderBy: {
            startedAt: 'desc',
          },
        });

        return jobs.map((job) => {
          const { name } = context.jobs[job.key];

          return {
            name,
            ...job,
          };
        });
      },
    ),
    logs: compose(
      authenticate({
        roles: [
          RoleKey.Admin,
        ],
      }),
    )(
      async (_parent, _args, _context, _info) => {
        const logs = await prisma.log.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });

        return logs;
      },
    ),
    me: compose(
      userContext(),
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
