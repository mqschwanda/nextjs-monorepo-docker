import loadSchema from '@mqs/graphql-schema/loadSchema';
import { createSchema, createYoga } from 'graphql-yoga';
import logger from '@mqs/logger';
import resolvers from './resolvers';

const schema = createSchema({
  resolvers,
  typeDefs: loadSchema(),
});

export default function createGraphqlServer() {
  return createYoga({
    cors: {
      credentials: true,
      // origin: 'http://localhost:3000',
    },
    graphiql: true,
    graphqlEndpoint: '/graphql/v1',
    landingPage: false,
    logging: {
      debug(options) {
        logger.debug({
          db: false,
          message: JSON.stringify(options),
        });
      },
      error(options) {
        logger.error({
          message: JSON.stringify(options),
          payload: options,
        });
      },
      info(options) {
        logger.info({
          db: false,
          message: JSON.stringify(options),
        });
      },
      warn(options) {
        logger.warn({
          message: JSON.stringify(options),
          payload: options,
        });
      },
    },
    schema,
  });
}
