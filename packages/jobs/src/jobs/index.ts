import InvalidateStaleTokens from './InvalidateStaleTokens';

export const jobs = {
  InvalidateStaleTokens,
};

export function scheduleJobs() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.scheduleJob();
    });
}

export function stopScheduledJobs() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.stopScheduledJob();
    });
}
