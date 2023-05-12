import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import { YogaLink } from '@graphql-yoga/apollo-link';

function getApolloClientUri() {
  return 'http://localhost:3001/graphql/v1';

  // if (process.env.NODE_ENV === 'production') {
  //   throw new Error('no production uri');
  //   // return '';
  // }

  // if (process.env.NODE_ENV === 'development') {
  //   return 'http://localhost:3001/graphql/v1';
  // }

  // throw new Error('no uri');
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new YogaLink({
    endpoint: getApolloClientUri(),
  }),
});

export default client;
