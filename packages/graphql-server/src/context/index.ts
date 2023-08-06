import { Tokens } from '@mqs/tokens';
import { YogaInitialContext } from 'graphql-yoga';

export type ContextType
  = YogaInitialContext
  & Record<string, any>
  & {
    user?: Awaited<ReturnType<typeof Tokens.verifyAccessToken>>['user'],
  };
