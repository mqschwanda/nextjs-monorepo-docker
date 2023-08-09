import { Tokens } from '@mqs/tokens';
import type { Jobs } from '@mqs/jobs';

export type ContextType
  = Record<string, any>
  & {
    jobs: Jobs,
    user?: Awaited<ReturnType<typeof Tokens.verifyAccessToken>>['user'],
  };
