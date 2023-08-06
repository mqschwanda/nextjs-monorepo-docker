import * as Types from '@mqs/graphql-schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

const defaultOptions = {} as const;
export const JobFragmentFragmentDoc = /* #__PURE__ */ gql`
    fragment JobFragment on Job {
  id
  key
  name
  canceledAt
  failedAt
  finishedAt
  startedAt
}
    `;
export const LogFragmentFragmentDoc = /* #__PURE__ */ gql`
    fragment LogFragment on Log {
  id
  createdAt
  message
  payload
  type
}
    `;
export const CancelJobDocument = /* #__PURE__ */ gql`
    mutation CancelJob($key: JobKey!) {
  cancelJob(key: $key) {
    id
    key
    name
  }
}
    `;
export type CancelJobMutationFn = Apollo.MutationFunction<Types.CancelJobMutation, Types.CancelJobMutationVariables>;

/**
 * __useCancelJobMutation__
 *
 * To run a mutation, you first call `useCancelJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelJobMutation, { data, loading, error }] = useCancelJobMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useCancelJobMutation(baseOptions?: Apollo.MutationHookOptions<Types.CancelJobMutation, Types.CancelJobMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CancelJobMutation, Types.CancelJobMutationVariables>(CancelJobDocument, options);
}
export type CancelJobMutationHookResult = ReturnType<typeof useCancelJobMutation>;
export type CancelJobMutationResult = Apollo.MutationResult<Types.CancelJobMutation>;
export type CancelJobMutationOptions = Apollo.BaseMutationOptions<Types.CancelJobMutation, Types.CancelJobMutationVariables>;
export const RunJobDocument = /* #__PURE__ */ gql`
    mutation RunJob($key: JobKey!) {
  runJob(key: $key) {
    id
    key
    name
  }
}
    `;
export type RunJobMutationFn = Apollo.MutationFunction<Types.RunJobMutation, Types.RunJobMutationVariables>;

/**
 * __useRunJobMutation__
 *
 * To run a mutation, you first call `useRunJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRunJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [runJobMutation, { data, loading, error }] = useRunJobMutation({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useRunJobMutation(baseOptions?: Apollo.MutationHookOptions<Types.RunJobMutation, Types.RunJobMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.RunJobMutation, Types.RunJobMutationVariables>(RunJobDocument, options);
}
export type RunJobMutationHookResult = ReturnType<typeof useRunJobMutation>;
export type RunJobMutationResult = Apollo.MutationResult<Types.RunJobMutation>;
export type RunJobMutationOptions = Apollo.BaseMutationOptions<Types.RunJobMutation, Types.RunJobMutationVariables>;
export const CountdownDocument = /* #__PURE__ */ gql`
    subscription Countdown($from: Int!) {
  countdown(from: $from)
}
    `;

/**
 * __useCountdownSubscription__
 *
 * To run a query within a React component, call `useCountdownSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCountdownSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountdownSubscription({
 *   variables: {
 *      from: // value for 'from'
 *   },
 * });
 */
export function useCountdownSubscription(baseOptions: Apollo.SubscriptionHookOptions<Types.CountdownSubscription, Types.CountdownSubscriptionVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<Types.CountdownSubscription, Types.CountdownSubscriptionVariables>(CountdownDocument, options);
}
export type CountdownSubscriptionHookResult = ReturnType<typeof useCountdownSubscription>;
export type CountdownSubscriptionResult = Apollo.SubscriptionResult<Types.CountdownSubscription>;
export const HelloDocument = /* #__PURE__ */ gql`
    query Hello($name: String!) {
  hello(name: $name)
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useHelloQuery(baseOptions: Apollo.QueryHookOptions<Types.HelloQuery, Types.HelloQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.HelloQuery, Types.HelloQueryVariables>(HelloDocument, options);
}
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.HelloQuery, Types.HelloQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.HelloQuery, Types.HelloQueryVariables>(HelloDocument, options);
}
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<Types.HelloQuery, Types.HelloQueryVariables>;
export const JobDocument = /* #__PURE__ */ gql`
    query Job($key: JobKey!) {
  job(key: $key) {
    ...JobFragment
  }
}
    ${JobFragmentFragmentDoc}`;

/**
 * __useJobQuery__
 *
 * To run a query within a React component, call `useJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQuery({
 *   variables: {
 *      key: // value for 'key'
 *   },
 * });
 */
export function useJobQuery(baseOptions: Apollo.QueryHookOptions<Types.JobQuery, Types.JobQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.JobQuery, Types.JobQueryVariables>(JobDocument, options);
}
export function useJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.JobQuery, Types.JobQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.JobQuery, Types.JobQueryVariables>(JobDocument, options);
}
export type JobQueryHookResult = ReturnType<typeof useJobQuery>;
export type JobLazyQueryHookResult = ReturnType<typeof useJobLazyQuery>;
export type JobQueryResult = Apollo.QueryResult<Types.JobQuery, Types.JobQueryVariables>;
export const JobsDocument = /* #__PURE__ */ gql`
    query Jobs {
  jobs {
    ...JobFragment
  }
}
    ${JobFragmentFragmentDoc}`;

/**
 * __useJobsQuery__
 *
 * To run a query within a React component, call `useJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobsQuery(baseOptions?: Apollo.QueryHookOptions<Types.JobsQuery, Types.JobsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.JobsQuery, Types.JobsQueryVariables>(JobsDocument, options);
}
export function useJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.JobsQuery, Types.JobsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.JobsQuery, Types.JobsQueryVariables>(JobsDocument, options);
}
export type JobsQueryHookResult = ReturnType<typeof useJobsQuery>;
export type JobsLazyQueryHookResult = ReturnType<typeof useJobsLazyQuery>;
export type JobsQueryResult = Apollo.QueryResult<Types.JobsQuery, Types.JobsQueryVariables>;
export const LogsDocument = /* #__PURE__ */ gql`
    query Logs {
  logs {
    ...LogFragment
  }
}
    ${LogFragmentFragmentDoc}`;

/**
 * __useLogsQuery__
 *
 * To run a query within a React component, call `useLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogsQuery(baseOptions?: Apollo.QueryHookOptions<Types.LogsQuery, Types.LogsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.LogsQuery, Types.LogsQueryVariables>(LogsDocument, options);
}
export function useLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.LogsQuery, Types.LogsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.LogsQuery, Types.LogsQueryVariables>(LogsDocument, options);
}
export type LogsQueryHookResult = ReturnType<typeof useLogsQuery>;
export type LogsLazyQueryHookResult = ReturnType<typeof useLogsLazyQuery>;
export type LogsQueryResult = Apollo.QueryResult<Types.LogsQuery, Types.LogsQueryVariables>;
export const MeDocument = /* #__PURE__ */ gql`
    query Me {
  me {
    id
    email
    nameFirst
    nameLast
    roleKeys
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MeQuery, Types.MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.MeQuery, Types.MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MeQuery, Types.MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<Types.MeQuery, Types.MeQueryVariables>;
