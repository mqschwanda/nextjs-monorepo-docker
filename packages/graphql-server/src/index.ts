import loadSchema from '@mqs/graphql-schema/loadSchema';
import { createSchema, createYoga } from 'graphql-yoga';
import resolvers from './resolvers';

const schema = createSchema({
  resolvers,
  typeDefs: loadSchema(),
});

export default function createGraphqlServer() {
  return createYoga({
    graphiql: true,
    graphqlEndpoint: '/graphql/v1',
    landingPage: false,
    logging: {
      debug(...args) {
        console.debug(...args);
      },
      error(...args) {
        console.error(...args);
      },
      info(...args) {
        console.info(...args);
      },
      warn(...args) {
        console.warn(...args);
      },
    },
    schema,
  });
}
