import {
  ApolloClient,
  InMemoryCache,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import type { HTTPExecutorOptions } from '@graphql-tools/executor-http';
import { YogaLink } from '@graphql-yoga/apollo-link';
import Cookies from 'js-cookie';

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

export default function getClient({
  fetch,
}: {
  fetch?: HTTPExecutorOptions['fetch'],
}) {
  const authorizationLink = setContext((_, ctx) => {
    const { headers = {} } = ctx;

    const token = Cookies.get('token');
    const authorization = token ? `Bearer ${token}` : undefined;

    return {
      ...ctx,
      headers: {
        ...headers,
        authorization,
      },
    };
  });

  const link = from(
    [
      authorizationLink,
      new YogaLink({
        credentials: 'include',
        endpoint: getApolloClientUri(),
        fetch,
        headers: (executorRequest) => {
          if (executorRequest) {
            return executorRequest.context.headers;
          }

          return {};
        },
      }),
    ],
  );

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    credentials: 'include',
    link,
  });

  return client;
}
