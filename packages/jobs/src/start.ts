import child_process from 'child_process';
import { JobKey } from '@mqs/prisma/client';
import argvStringFromObject from './argvStringFromObject';

type StartOptions = {
  key: JobKey,
};

export default function start({
  key,
}: StartOptions) {
  child_process.fork(
    require.resolve('./cli/start'),
    argvStringFromObject({ key }),
  );
}
