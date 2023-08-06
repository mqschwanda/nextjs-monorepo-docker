import { ContextType } from 'context';
import { GraphQLResolveInfo } from 'graphql';

export type Middleware<
  TParent extends {} = {},
  TContext extends ContextType = ContextType,
  TArgs extends {} = {},
> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<[TParent, TArgs, TContext, GraphQLResolveInfo]>;
