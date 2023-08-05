import { JobKey } from '@mqs/prisma/client';

export default function stringIsJobKey(value?: string): value is JobKey {
  return !!value && Object.keys(JobKey).includes(value);
}
