import { Resolver, ResolverFn } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import { GraphQLResolveInfo } from 'graphql';
import { Middleware } from 'resolvers/middleware/types';
import resolveResolver from '../resolveResolver';
import reduce from '../reduce';

export default function compose<
  TParentPassthrough extends {},
  TContextPassthrough extends ContextType,
  TArgsPassthrough extends {},
>(
  ...functions: Array<Middleware<TParentPassthrough, TContextPassthrough, TArgsPassthrough>>
) {
  return <
    TResult extends any,
    TParent extends {} = TParentPassthrough,
    TContext extends ContextType = TContextPassthrough,
    TArgs extends {} = TArgsPassthrough,
  >(
    resolver: Resolver<TResult, TParent, TContext, TArgs>,
  ): ResolverFn<TResult, TParent, TContext, TArgs> => async (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => {
    const options = await reduce<TParent, TContext, TArgs>(
      // TODO: fix types so unknown does not need to be passed
      ...functions as unknown as Array<Middleware<TParent, TContext, TArgs>>,
    )(
      parent,
      args,
      context,
      info,
    );

    return resolveResolver(
      resolver,
      ...options,
    );
  };
}
