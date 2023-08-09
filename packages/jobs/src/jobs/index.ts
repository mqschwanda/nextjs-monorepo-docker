import { JobKey } from '@mqs/prisma/client';
import InvalidateStaleTokens from './InvalidateStaleTokens';
import Job from '@/Job';

export type Jobs = {
  [key in JobKey]: Job
};
export const jobs: Jobs = {
  InvalidateStaleTokens,
};

export function scheduleJobs() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.schedule();
    });
}

export function unscheduleJobs() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.unschedule();
    });
}
