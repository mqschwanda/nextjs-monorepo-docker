/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
};

export type Job = {
  id: Scalars['ID']['output'];
  key: JobKey;
  name: Scalars['String']['output'];
  ranJob?: Maybe<RanJob>;
};

export enum JobKey {
  InvalidateStaleTokens = 'InvalidateStaleTokens'
}

export type Mutation = {
  cancelJob: Job;
  runJob: Job;
};


export type MutationCancelJobArgs = {
  key: JobKey;
};


export type MutationRunJobArgs = {
  key: JobKey;
};

export type Query = {
  hello: Scalars['String']['output'];
  job: Job;
  jobs: Array<Job>;
  me?: Maybe<User>;
};


export type QueryHelloArgs = {
  name: Scalars['String']['input'];
};


export type QueryJobArgs = {
  key: JobKey;
};

export type RanJob = {
  canceledAt?: Maybe<Scalars['Date']['output']>;
  failedAt?: Maybe<Scalars['Date']['output']>;
  finishedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  startedAt: Scalars['Date']['output'];
};

export enum RoleKey {
  Admin = 'Admin'
}

export type Subscription = {
  countdown: Scalars['Int']['output'];
};


export type SubscriptionCountdownArgs = {
  from: Scalars['Int']['input'];
};

export type User = {
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nameFirst: Scalars['String']['output'];
  nameLast: Scalars['String']['output'];
  roleKeys: Array<RoleKey>;
};

export type CancelJobMutationVariables = Exact<{
  key: JobKey;
}>;


export type CancelJobMutation = { cancelJob: { id: string, key: JobKey, name: string } };

export type RunJobMutationVariables = Exact<{
  key: JobKey;
}>;


export type RunJobMutation = { runJob: { id: string, key: JobKey, name: string } };

export type CountdownSubscriptionVariables = Exact<{
  from: Scalars['Int']['input'];
}>;


export type CountdownSubscription = { countdown: number };

export type HelloQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type HelloQuery = { hello: string };

export type JobQueryVariables = Exact<{
  key: JobKey;
}>;


export type JobQuery = { job: { id: string, key: JobKey, name: string, ranJob?: { id: string, canceledAt?: Date | null, failedAt?: Date | null, finishedAt?: Date | null, startedAt: Date } | null } };

export type JobsQueryVariables = Exact<{ [key: string]: never; }>;


export type JobsQuery = { jobs: Array<{ id: string, key: JobKey, name: string, ranJob?: { id: string, canceledAt?: Date | null, failedAt?: Date | null, finishedAt?: Date | null, startedAt: Date } | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: { id: string, email: string, nameFirst: string, nameLast: string, roleKeys: Array<RoleKey> } | null };

export type RanJobFragmentFragment = { id: string, canceledAt?: Date | null, failedAt?: Date | null, finishedAt?: Date | null, startedAt: Date };

export type JobFragmentFragment = { id: string, key: JobKey, name: string, ranJob?: { id: string, canceledAt?: Date | null, failedAt?: Date | null, finishedAt?: Date | null, startedAt: Date } | null };

export const RanJobFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RanJobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RanJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}}]} as unknown as DocumentNode<RanJobFragmentFragment, unknown>;
export const JobFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ranJob"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RanJobFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RanJobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RanJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}}]} as unknown as DocumentNode<JobFragmentFragment, unknown>;
export const CancelJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CancelJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancelJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CancelJobMutation, CancelJobMutationVariables>;
export const RunJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RunJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"runJob"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RunJobMutation, RunJobMutationVariables>;
export const CountdownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Countdown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"from"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countdown"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"from"},"value":{"kind":"Variable","name":{"kind":"Name","value":"from"}}}]}]}}]} as unknown as DocumentNode<CountdownSubscription, CountdownSubscriptionVariables>;
export const HelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hello"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;
export const JobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Job"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JobKey"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"job"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RanJobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RanJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ranJob"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RanJobFragment"}}]}}]}}]} as unknown as DocumentNode<JobQuery, JobQueryVariables>;
export const JobsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"JobFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RanJobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RanJob"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"finishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"JobFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Job"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ranJob"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RanJobFragment"}}]}}]}}]} as unknown as DocumentNode<JobsQuery, JobsQueryVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nameFirst"}},{"kind":"Field","name":{"kind":"Name","value":"nameLast"}},{"kind":"Field","name":{"kind":"Name","value":"roleKeys"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;