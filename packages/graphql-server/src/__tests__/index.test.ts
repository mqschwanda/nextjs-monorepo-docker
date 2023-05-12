import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { CountdownDocument, HelloDocument } from '@mqs/graphql-schema';
import { isAsyncIterable } from 'graphql-yoga';
import createGraphqlServer from '..';

describe('@mqs/graphql-server', () => {
  describe('Query', () => {
    describe('hello', () => {
      it('should return data', async () => {
        const name = 'John Smith';

        const graphqlServer = createGraphqlServer();
        const executor = buildHTTPExecutor({
          endpoint: graphqlServer.graphqlEndpoint,
          fetch: graphqlServer.fetch,
        });
        const result = await executor({
          document: HelloDocument,
          variables: {
            name,
          },
        });

        if (isAsyncIterable(result)) {
          throw new Error('result should not be AsyncIterable');
        }

        expect(result).toMatchSnapshot();
        expect(result.data?.hello).toBe(`Hello ${name}`);
      });
    });
  });
  describe('Subscription', () => {
    describe('countdown', () => {
      it('should return async iterable data', async () => {
        const from = 2;

        const graphqlServer = createGraphqlServer();
        const executor = buildHTTPExecutor({
          endpoint: graphqlServer.graphqlEndpoint,
          fetch: graphqlServer.fetch,
        });
        const subscription = await executor({
          document: CountdownDocument,
          variables: {
            from,
          },
        });

        if (!isAsyncIterable(subscription)) {
          throw new Error('result should be AsyncIterable');
        }

        let i = from;
        // eslint-disable-next-line no-restricted-syntax
        for await (const result of subscription) {
          expect(result.data?.countdown).toBe(i);
          i--;

          if (i === 0) {
            break;
          }
        }
      });
    });
  });
});
