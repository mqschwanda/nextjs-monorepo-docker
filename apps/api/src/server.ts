import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createGraphqlServer from '@mqs/graphql-server';

export default function createServer() {
  const graphqlServer = createGraphqlServer();

  const app = express();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(graphqlServer.graphqlEndpoint, graphqlServer)
    .get('/healthz', (_req, res) => res.json({ ok: true }));

  return app;
}
