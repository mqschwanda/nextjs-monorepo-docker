import { LoggerOptionsSerialized } from 'types';
import getApolloClientUri from '@mqs/graphql-client/getApolloClientUri';
import { CreateLog } from '@mqs/graphql-client/document-strings';
import type { LogInput } from '@mqs/graphql-schema';
import type { CreateLogMutationResult } from '@mqs/graphql-client';
import Logger from './Logger';

const uri = getApolloClientUri();

async function handler(options: LoggerOptionsSerialized) {
  const {
    message,
    payload,
    type,
  } = options;

  const input: LogInput = {
    message,
    payload,
    type,
  };

  const body = JSON.stringify({
    query: CreateLog,
    variables: {
      input,
    },
  });

  const headers = {
    'Content-Type': 'application/json',
  };

  const request = new Request(
    uri,
    {
      body,
      headers,
      method: 'POST',
    },
  );

  const response = await fetch(request);

  const result: CreateLogMutationResult = await response.json();
  const log = result.data?.createLog;

  return log;
}

export default new Logger(handler);
