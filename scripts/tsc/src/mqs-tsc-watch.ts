#!/usr/bin/env node

import { spawn } from 'child_process';
import concurrently from 'concurrently';

const args = process.argv.slice(2);

const tsc = spawn('mqs-tsc', args);

tsc.stdout.on(
  'data',
  (data: any) => {
    console.log(data.toString());
  },
);

tsc.stderr.on(
  'data',
  (data: any) => {
    console.error(data.toString());
  },
);

tsc.on(
  'close',
  (code: any) => {
    console.log(`mqs-tsc process exited with code ${code}`);

    if (code === 0) {
      const argsString = args.join(' ');
      const { result } = concurrently(
        [
          {
            command: `tsc -w ${argsString}`,
          },
          {
            command: `mqs-tsc-alias -w ${argsString}`,
          },
        ],
      );

      result.then(
        () => {
          console.log('mqs-tsc-watch process success');
        },
        () => {
          console.error('mqs-tsc-watch process failure');
        },
      );
    }
  },
);
