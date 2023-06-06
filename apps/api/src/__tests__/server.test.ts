import supertest from 'supertest';
import createServer from '../server';

describe('@mqs/api', () => {
  describe('server', () => {
    it('health check returns 200', async () => {
      const server = supertest(createServer());

      const res = await server
        .get(
          '/healthz', // cspell:disable-line
        )
        .expect(200);

      expect(res.body.ok).toBe(true);
    });

    it('graphql endpoint returns 200', async () => {
      const server = supertest(createServer());

      const res = await server
        .get('/graphql/v1')
        .expect(200);

      expect(res.body).toStrictEqual({ errors: [{ message: 'Must provide query string.' }] });
    });
  });
});
