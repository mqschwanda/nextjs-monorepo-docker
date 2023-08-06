import { Resolver, ResolverFn } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import { GraphQLResolveInfo } from 'graphql';
import { resolveResolver } from 'resolvers/utilities';
import Bluebird from 'bluebird';

type IMiddleware<
  TParent extends {} = {},
  TContext extends ContextType = ContextType,
  TArgs extends {} = {},
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<[TParent, TArgs, TContext, GraphQLResolveInfo]>;

export default function compose<
  TParentPassthrough extends {},
  TContextPassthrough extends ContextType,
  TArgsPassthrough extends {},
>(
  ...functions: Array<IMiddleware<TParentPassthrough, TContextPassthrough, TArgsPassthrough>>
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
    async function reduceMiddleware(
      previousValue: [TParent, TArgs, TContext, GraphQLResolveInfo],
      currentValue: IMiddleware<TParent, TContext, TArgs>,
    ) {
      return currentValue(...previousValue);
    }

    const options = await Bluebird.reduce(
      // TODO: fix types so unknown does not need to be passed
      functions as unknown as Array<IMiddleware<TParent, TContext, TArgs>>,
      reduceMiddleware,
      [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo],
    );

    return resolveResolver(
      resolver,
      ...options,
    );
  };
}
