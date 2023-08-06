import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';
import { AuthenticationError } from 'errors';
import userContext from '../userContext';
import { reduce } from '../utilities';

type AuthenticateOptions = {

};

export default function authenticate<
  TParent extends {},
  TContext extends ContextType,
  TArgs extends {},
>(
  _options: AuthenticateOptions = {

  },
) {
  async function middleware(
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) {
    if (context.user) {
      return [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo];
    }

    throw new AuthenticationError();
  }

  return reduce(
    userContext(),
    middleware,
  );
}
