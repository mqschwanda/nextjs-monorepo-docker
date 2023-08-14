import { LoggerOptionsSerialized } from 'types';
import getApolloClientUri from '@mqs/graphql-client/getApolloClientUri';
import { CreateLog } from '@mqs/graphql-client/document-strings';
import type { LogInput } from '@mqs/graphql-schema';
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
  const result = await response.json();

  return result.data;
}

export default new Logger(handler);
