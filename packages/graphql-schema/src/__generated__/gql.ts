/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CancelJob($key: JobKey!) {\n  cancelJob(key: $key) {\n    id\n    key\n    name\n  }\n}": types.CancelJobDocument,
    "mutation CreateLog($input: LogInput!) {\n  createLog(input: $input) {\n    ...LogFragment\n  }\n}": types.CreateLogDocument,
    "mutation RunJob($key: JobKey!) {\n  runJob(key: $key) {\n    id\n    key\n    name\n  }\n}": types.RunJobDocument,
    "subscription Countdown($from: Int!) {\n  countdown(from: $from)\n}": types.CountdownDocument,
    "query Hello($name: String!) {\n  hello(name: $name)\n}": types.HelloDocument,
    "query Job($key: JobKey!) {\n  job(key: $key) {\n    ...JobFragment\n  }\n}": types.JobDocument,
    "query Jobs {\n  jobs {\n    ...JobFragment\n  }\n}": types.JobsDocument,
    "query Logs {\n  logs {\n    ...LogFragment\n  }\n}": types.LogsDocument,
    "query Me {\n  me {\n    id\n    email\n    nameFirst\n    nameLast\n    roleKeys\n  }\n}": types.MeDocument,
    "query Version {\n  version\n}": types.VersionDocument,
    "fragment JobFragment on Job {\n  id\n  key\n  name\n  canceledAt\n  failedAt\n  finishedAt\n  startedAt\n}\n\nfragment LogFragment on Log {\n  id\n  createdAt\n  message\n  payload\n  type\n}": types.JobFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CancelJob($key: JobKey!) {\n  cancelJob(key: $key) {\n    id\n    key\n    name\n  }\n}"): (typeof documents)["mutation CancelJob($key: JobKey!) {\n  cancelJob(key: $key) {\n    id\n    key\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateLog($input: LogInput!) {\n  createLog(input: $input) {\n    ...LogFragment\n  }\n}"): (typeof documents)["mutation CreateLog($input: LogInput!) {\n  createLog(input: $input) {\n    ...LogFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RunJob($key: JobKey!) {\n  runJob(key: $key) {\n    id\n    key\n    name\n  }\n}"): (typeof documents)["mutation RunJob($key: JobKey!) {\n  runJob(key: $key) {\n    id\n    key\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription Countdown($from: Int!) {\n  countdown(from: $from)\n}"): (typeof documents)["subscription Countdown($from: Int!) {\n  countdown(from: $from)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Hello($name: String!) {\n  hello(name: $name)\n}"): (typeof documents)["query Hello($name: String!) {\n  hello(name: $name)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Job($key: JobKey!) {\n  job(key: $key) {\n    ...JobFragment\n  }\n}"): (typeof documents)["query Job($key: JobKey!) {\n  job(key: $key) {\n    ...JobFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Jobs {\n  jobs {\n    ...JobFragment\n  }\n}"): (typeof documents)["query Jobs {\n  jobs {\n    ...JobFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Logs {\n  logs {\n    ...LogFragment\n  }\n}"): (typeof documents)["query Logs {\n  logs {\n    ...LogFragment\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Me {\n  me {\n    id\n    email\n    nameFirst\n    nameLast\n    roleKeys\n  }\n}"): (typeof documents)["query Me {\n  me {\n    id\n    email\n    nameFirst\n    nameLast\n    roleKeys\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Version {\n  version\n}"): (typeof documents)["query Version {\n  version\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment JobFragment on Job {\n  id\n  key\n  name\n  canceledAt\n  failedAt\n  finishedAt\n  startedAt\n}\n\nfragment LogFragment on Log {\n  id\n  createdAt\n  message\n  payload\n  type\n}"): (typeof documents)["fragment JobFragment on Job {\n  id\n  key\n  name\n  canceledAt\n  failedAt\n  finishedAt\n  startedAt\n}\n\nfragment LogFragment on Log {\n  id\n  createdAt\n  message\n  payload\n  type\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;