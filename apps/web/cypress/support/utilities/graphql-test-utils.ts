import { CyHttpMessages } from 'cypress/types/net-stubbing';
import type { Resolvers } from '@mqs/graphql-schema';

type QueryOperationNames = keyof NonNullable<Resolvers['Query']>;
type MutationOperationNames = keyof NonNullable<Resolvers['Mutation']>;
type OperationNames = QueryOperationNames | MutationOperationNames;

// TODO: @mqs/string
function capitalize(operationName: string) {
  return operationName.charAt(0).toUpperCase() + operationName.slice(1);
}

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: OperationNames,
) => {
  const { body } = req;

  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName')
    && (
      body.operationName === operationName
      || body.operationName === capitalize(operationName)
    )
  );
};

// Alias query if operationName matches
export const aliasQuery = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: QueryOperationNames,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `query ${capitalize(operationName)}`;
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: MutationOperationNames,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `mutation ${capitalize(operationName)}`;
  }
};
