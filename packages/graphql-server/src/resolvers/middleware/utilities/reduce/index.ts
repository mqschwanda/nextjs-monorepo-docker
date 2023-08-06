import { ContextType } from 'context';
import { GraphQLResolveInfo } from 'graphql';
import Bluebird from 'bluebird';
import { Middleware } from 'resolvers/middleware/types';

export default function reduce<
  TParentPassthrough extends {},
  TContextPassthrough extends ContextType,
  TArgsPassthrough extends {},
>(
  ...functions: Array<Middleware<TParentPassthrough, TContextPassthrough, TArgsPassthrough>>
) {
  return async <
    // TResult extends any,
    TParent extends {} = TParentPassthrough,
    TContext extends ContextType = TContextPassthrough,
    TArgs extends {} = TArgsPassthrough,
  >(
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => {
    const options = await Bluebird.reduce(
      // TODO: fix types so unknown does not need to be passed
      functions as unknown as Array<Middleware<TParent, TContext, TArgs>>,
      async (
        previousValue: [TParent, TArgs, TContext, GraphQLResolveInfo],
        currentValue: Middleware<TParent, TContext, TArgs>,
      ) => currentValue(...previousValue),
      [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo],
    );

    return options;
  };
}
