import loadSchema from 'graphql-schema/loadSchema';
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
    schema,
  });
}
