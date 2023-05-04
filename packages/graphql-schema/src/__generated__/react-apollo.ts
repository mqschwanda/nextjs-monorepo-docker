import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from './graphql';

const defaultOptions = {} as const;

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
