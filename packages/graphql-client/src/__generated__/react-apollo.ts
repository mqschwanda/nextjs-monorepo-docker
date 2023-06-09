import * as Types from '@mqs/graphql-schema';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

const defaultOptions = {} as const;

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
