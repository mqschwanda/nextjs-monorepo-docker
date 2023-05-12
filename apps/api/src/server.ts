import { json, urlencoded } from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createGraphqlServer from 'graphql-server';

export default function createServer() {
  const graphql = createGraphqlServer();

  const app = express();
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use(graphql.graphqlEndpoint, graphql);

  return app;
}
