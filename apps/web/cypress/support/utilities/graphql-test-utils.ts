import { CyHttpMessages } from 'cypress/types/net-stubbing';

type QueryOperationNames = string; // TODO: update with type safe operation names
type MutationOperationNames = string; // TODO: update with type safe operation names
type OperationNames = QueryOperationNames | MutationOperationNames;

// Utility to match GraphQL mutation based on the operation name
export const hasOperationName = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: OperationNames,
) => {
  const { body } = req;

  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName')
    && body.operationName === operationName
  );
};

// Alias query if operationName matches
export const aliasQuery = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: QueryOperationNames,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `query ${operationName}`;
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (
  req: CyHttpMessages.IncomingHttpRequest,
  operationName: MutationOperationNames,
) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `mutation ${operationName}`;
  }
};
