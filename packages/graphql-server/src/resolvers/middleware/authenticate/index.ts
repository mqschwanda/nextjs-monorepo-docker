import { Resolver } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';
import { AuthenticationError } from 'errors';

type AuthenticateOptions = {
  throwErrors: boolean
};

async function authenticateResolver<
  TResult extends any,
  TParent extends {},
  TContext extends ContextType,
  TArgs extends {},
  >(
  resolver: Resolver<TResult, TParent, TContext, TArgs>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
  options: AuthenticateOptions = {
    throwErrors: true,
  },
) {
  const cookies = context.request.headers.get('cookie');

  if (cookies) {
    const { access } = cookie.parse(cookies);

    if (access) {
      try {
        const token = await Tokens.verifyAccessToken(access);

        context.user = token.user;
      } catch (error) {
        if (options.throwErrors) {
          throw error;
        }
      }
    }
  }

  if (context.user || !options.throwErrors) {
    if (typeof resolver === 'function') {
      return resolver(parent, args, context, info);
    }

    return resolver.resolve(parent, args, context, info);
  }

  throw new AuthenticationError();
}

export const authenticate = <
  TResult extends any,
  TParent extends {},
  TContext extends ContextType,
  TArgs extends {},
>(
    resolver: Resolver<TResult, TParent, TContext, TArgs>,
    options?: AuthenticateOptions,
  ): Resolver<TResult, TParent, TContext, TArgs> => (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => authenticateResolver(resolver, parent, args, context, info, options);

export default authenticate;
