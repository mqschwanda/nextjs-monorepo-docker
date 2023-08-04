import InvalidateStaleTokens from './InvalidateStaleTokens';

export const jobs = {
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
