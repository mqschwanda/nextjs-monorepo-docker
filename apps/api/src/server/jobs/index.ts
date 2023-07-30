import * as invalidateStaleTokens from './invalidateStaleTokens';

const jobs = {
  invalidateStaleTokens,
};

export function schedule() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.schedule();
    });
}

export function stop() {
  Object
    .values(jobs)
    .forEach((job) => {
      job.stop();
    });
}
