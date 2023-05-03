import { gql } from '@apollo/client';

export const queryHello = gql`
  query Hello($name: String!) {
    hello(name: $name)
  }
`;
