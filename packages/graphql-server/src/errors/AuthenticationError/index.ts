import { GraphQLError, GraphQLErrorOptions } from 'graphql';

export default class AuthenticationError extends GraphQLError {
  constructor(
    message: string = 'forbidden',
    options: GraphQLErrorOptions = {},
  ) {
    super(
      message,
      {
        ...options,
        extensions: {
          ...options.extensions,
          code: 'FORBIDDEN',
        },
      },
    );
  }
}
