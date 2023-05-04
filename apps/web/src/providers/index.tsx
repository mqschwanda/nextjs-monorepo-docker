'use client';

import type { ReactNode } from 'react';
import { ApolloProvider } from 'graphql-client';
import { UiProvider } from 'ui';

export interface ProviderProps {
  children: ReactNode
}

export default function Providers({
  children,
}: ProviderProps) {
  return (
    <ApolloProvider>
      <UiProvider>
        { children }
      </UiProvider>
    </ApolloProvider>
  );
}
