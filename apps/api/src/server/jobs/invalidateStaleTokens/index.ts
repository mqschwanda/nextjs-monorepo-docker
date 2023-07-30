import { Tokens } from '@mqs/tokens';
import cron, { ScheduledTask } from 'node-cron';

let job: ScheduledTask | undefined;

export function schedule() {
  job = cron.schedule('59 59 23 * * *', async () => {
    await Tokens.invalidateStaleTokens();
  });
}

export function stop() {
  if (job) {
    job.stop();
  }
}
