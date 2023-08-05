#!/usr/bin/env node

/* eslint-disable no-console */
import yargs from 'yargs/yargs';
import { jobs } from '../jobs';
import stringIsJobKey from '@/stringIsJobKey';

console.log('mqs-jobs-run started');

; // eslint-disable-line
(async () => {
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

  if (stringIsJobKey(key)) {
    const job = jobs[key];

    if (!job) {
      throw new Error(`job not found for ${key}`);
    }

    console.log(`running job with key ${key}`);

    await job.run();
  }
})();

console.log('mqs-jobs-run finished');
