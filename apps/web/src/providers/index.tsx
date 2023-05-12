'use client';

import type { ReactNode } from 'react';
import { ApolloProvider } from '@mqs/graphql-client';
import { UiProvider } from '@mqs/ui';

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
