import { Resolver } from '@mqs/graphql-schema';
import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { GraphQLResolveInfo } from 'graphql';
import { User } from '@mqs/prisma/client';

async function authenticateResolver<
  TResult extends any,
  TParent extends any,
  TContext extends {
    [key: string]: any,
    user: User
  },
  TArgs extends {},
  >(
  resolver: Resolver<TResult, TParent, TContext, TArgs>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) {
  const cookies = context.request.headers.get('cookie');

  if (!cookies) {
    throw new Error('an unexpected error occurred');
  }

  const { access } = cookie.parse(cookies);

  if (!access) {
    throw new Error('an unexpected error occurred');
  }

  const token = await Tokens.verifyAccessToken(access);

  context.user = token.user;

  if (typeof resolver === 'function') {
    return resolver(parent, args, context, info);
  }

  return resolver.resolve(parent, args, context, info);
}

export const authenticate = <
  TResult extends any,
  TParent extends any,
  TContext extends {
    [key: string]: any,
    user: User
  },
  TArgs extends {},
>(
    resolver: Resolver<TResult, TParent, TContext, TArgs>,
  ): Resolver<TResult, TParent, TContext, TArgs> => (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => authenticateResolver(resolver, parent, args, context, info);

export default authenticate;
