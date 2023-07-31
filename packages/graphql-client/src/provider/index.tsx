'use client';

import { ApolloProvider as Provider } from '@apollo/client';
import { useMemo, type ReactNode } from 'react';
import type { HTTPExecutorOptions } from '@graphql-tools/executor-http';
import getClient from '../client';

export interface ApolloProviderProps {
  children: ReactNode;
  fetch?: HTTPExecutorOptions['fetch'];
}

export function ApolloProvider({
  children,
  fetch,
}: ApolloProviderProps) {
  const client = useMemo(
    () => getClient({
      fetch,
    }),
    [
      fetch,
    ],
  );
  return (
    <Provider
      client={client}
    >
      { children }
    </Provider>
  );
}
