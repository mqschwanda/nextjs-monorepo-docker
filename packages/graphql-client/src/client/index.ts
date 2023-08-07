import {
  ApolloClient,
  InMemoryCache,
  from,
} from '@apollo/client';
import type { HTTPExecutorOptions } from '@graphql-tools/executor-http';
import { YogaLink } from '@graphql-yoga/apollo-link';
import getApolloClientUri from './getApolloClientUri';

export default function getClient({
  fetch,
}: {
  fetch?: HTTPExecutorOptions['fetch'],
}) {
  const link = from(
    [
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
