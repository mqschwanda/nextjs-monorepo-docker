import { User } from '@mqs/prisma/client';
import { YogaInitialContext } from 'graphql-yoga';

export type ContextType
  = YogaInitialContext
  & Record<string, any>
  & {
    user?: User,
  };
