import {
  CountdownDocument,
  HelloDocument,
} from '@mqs/graphql-schema';
import { isAsyncIterable } from 'graphql-yoga';
import { executeGraphqlDocument } from './utilities';

describe('@mqs/graphql-server', () => {
  describe('Query', () => {
    describe('hello', () => {
      it('should return data', async () => {
        const name = 'John Smith';

        const result = await executeGraphqlDocument({
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

        const subscription = await executeGraphqlDocument({
          document: CountdownDocument,
          variables: {
            from,
          },
        });

        if (!isAsyncIterable(subscription)) {
          throw new Error('result should be AsyncIterable');
        }

        const results = [];
        let i = from;
        // eslint-disable-next-line no-restricted-syntax
        for await (const result of subscription) {
          results.push(result);
          expect(result.data?.countdown).toBe(i);
          i--;

          if (i < 0) {
            break;
          }
        }

        expect(results).toMatchSnapshot();
      });
    });
  });
});
