import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createGraphqlServer from '@mqs/graphql-server';
import * as jobs from '@mqs/jobs';
import healthz from './routes/healthz'; // cspell:disable-line
import healthDb from './routes/healthz-db'; // cspell:disable-line

export default function createServer() {
  const graphqlServer = createGraphqlServer({
    jobs: jobs.jobs,
  });

  const app = express();

  jobs.scheduleJobs();

  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors({
      credentials: true,
      origin: 'http://localhost:3000',
    }))
    .use(graphqlServer.graphqlEndpoint, graphqlServer)
    .get('/healthz', healthz) // cspell:disable-line
    .get('/healthz-db', healthDb); // cspell:disable-line

  return app;
}
