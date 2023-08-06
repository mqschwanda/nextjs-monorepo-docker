import { Resolver } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';
import { AuthenticationError } from 'errors';
import { resolveResolver } from 'resolvers/utilities';

type AuthenticateOptions = {
  throwErrors: boolean
};

async function authenticateResolver<
  TParent extends {},
  TContext extends ContextType,
  TArgs extends {},
  >(
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
    return [parent, args, context, info] as const;
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
  ): Resolver<TResult, TParent, TContext, TArgs> => async (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => resolveResolver(
    resolver,
    ...await authenticateResolver(parent, args, context, info, options),
  );

export default authenticate;
