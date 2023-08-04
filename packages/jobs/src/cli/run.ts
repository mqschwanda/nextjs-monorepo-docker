#!/usr/bin/env node

/* eslint-disable no-console */
import yargs from 'yargs/yargs';
import { jobs } from '../jobs';

console.log('mqs-jobs-run started');

const {
  key,
} = yargs(process.argv)
  .options({
    key: {
      default: undefined,
      type: 'string',
    },
  })
  .parseSync();

if (
  key
  && Object.keys(jobs).includes(key)
) {
  const job = jobs[key as keyof typeof jobs];

  if (!job) {
    throw new Error(`job not found for ${key}`);
  }

  console.log(`running job with key ${key}`);

  job.run();
}

console.log('mqs-jobs-run finished');
