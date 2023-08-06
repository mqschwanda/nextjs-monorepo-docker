import { Resolver } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import { GraphQLResolveInfo } from 'graphql';

export default function resolveResolver<
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
) {
  if (typeof resolver === 'function') {
    return resolver(parent, args, context, info);
  }

  return resolver.resolve(parent, args, context, info);
}
