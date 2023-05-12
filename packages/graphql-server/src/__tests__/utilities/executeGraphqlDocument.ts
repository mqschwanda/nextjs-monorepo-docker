import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { TypedDocumentNode } from '@apollo/client';
import createGraphqlServer from '../..';

export default async function executeGraphqlDocument<
  Q,
  V extends Record<string, any>,
>({
  document,
  variables,
}: {
  document: TypedDocumentNode<Q, V>,
  variables: V,
}) {
  const graphqlServer = createGraphqlServer();
  const executor = buildHTTPExecutor({
    endpoint: graphqlServer.graphqlEndpoint,
    fetch: graphqlServer.fetch,
  });
  const result = await executor({
    document,
    variables,
  });

  return result;
}
