import child_process from 'child_process';
import { JobKey } from '@mqs/prisma/client';
import argvStringFromObject from './argvStringFromObject';

type CancelOptions = {
  key: JobKey,
};

export default function cancel({
  key,
}: CancelOptions) {
  child_process.fork(
    require.resolve('./cli/cancel'),
    argvStringFromObject({ key }),
  );
}
