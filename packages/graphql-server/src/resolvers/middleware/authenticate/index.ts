import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';
import { RoleKey } from '@mqs/graphql-schema';
import { AuthenticationError } from '@/errors';
import userContext from '../userContext';
import { reduce } from '../utilities';

function contextHasUser(
  context: ContextType,
): context is ContextType & Required<Pick<ContextType, 'user'>> {
  return !!context.user;
}

function userHasRoles(
  context: Required<Pick<ContextType, 'user'>>,
  roles: Array<RoleKey>,
) {
  const userRoles = context.user.roles.map(({ role: { key } }) => key);

  return roles.every((role) => userRoles.includes(role));
}

type AuthenticateOptions = {
  roles: Array<RoleKey>
};

export default function authenticate<
  TParent extends {},
  TContext extends ContextType,
  TArgs extends {},
>(
  {
    roles,
  }: AuthenticateOptions = {
    roles: [],
  },
) {
  async function middleware(
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) {
    if (
      contextHasUser(context)
      && (
        roles.length === 0
        || userHasRoles(context, roles)
      )
    ) {
      return [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo];
    }

    throw new AuthenticationError();
  }

  return reduce(
    userContext(),
    middleware,
  );
}
