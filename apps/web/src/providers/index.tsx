'use client';

import type { ReactNode } from 'react';
import { ApolloProvider } from 'graphql-client';

export interface ProviderProps {
  children: ReactNode
}

export default function Providers({
  children,
}: ProviderProps) {
  return (
    <ApolloProvider>
      { children }
    </ApolloProvider>
  );
}
