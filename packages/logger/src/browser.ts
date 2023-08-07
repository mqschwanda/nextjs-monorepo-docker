import { LoggerOptions } from 'types';
import getApolloClientUri from '@mqs/graphql-client/getApolloClientUri';
import { CreateLogDocument } from '@mqs/graphql-client';
import type { LogInput } from '@mqs/graphql-schema';
import Logger from './Logger';

async function handler(options: LoggerOptions) {
  const payload = options.payload
    ? JSON.parse(JSON.stringify(options.payload))
    : undefined;

  const input: LogInput = {
    message: options.message,
    payload,
    type: options.type,
  };

  const request = new Request(
    getApolloClientUri(),
    {
      body: JSON.stringify({
        query: CreateLogDocument,
        variables: {
          input,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  );
  const response = await fetch(request);
  const result = await response.json();

  return result.data;
}

export default new Logger(handler);
