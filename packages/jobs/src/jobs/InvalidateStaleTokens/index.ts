import { JobKey } from '@mqs/prisma/client';
import { Tokens } from '@mqs/tokens';
import Job from '@/Job';

async function invalidateStaleTokens() {
  await Tokens.invalidateStaleTokens();
}

export default new Job(
  JobKey.InvalidateStaleTokens,
  'Invalidate stale tokens',
  invalidateStaleTokens,
  '59 59 23 * * *',
);
