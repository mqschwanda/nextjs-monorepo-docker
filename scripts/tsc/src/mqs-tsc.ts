#!/usr/bin/env node

import { spawn } from 'child_process';

const args = process.argv.slice(2);

function spawnTsc() {
  const tsc = spawn('tsc', args);

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
      console.log(`tsc process exited with code ${code}`);
    },
  );

  return tsc;
}

function spawnTscAlias() {
  const alias = spawn('mqs-tsc-alias', args);

  alias.stdout.on(
    'data',
    (data: any) => {
      console.log(data.toString());
    },
  );

  alias.stderr.on(
    'data',
    (data: any) => {
      console.error(data.toString());
    },
  );

  alias.on(
    'close',
    (code: any) => {
      console.log(`tsc-alias process exited with code ${code}`);
    },
  );

  return alias;
}

const tsc = spawnTsc();
tsc.on(
  'close',
  (code: any) => {
    if (code === 0) {
      spawnTscAlias();
    }
  },
);
