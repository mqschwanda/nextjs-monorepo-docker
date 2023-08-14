import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from '@/context';
import { compose, userContext } from '@/resolvers/middleware';

type QueryMe = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['me']>;

const queryMe: QueryMe = async (_parent, _args, context, _info) => {
  if (!context.user) {
    return null;
  }

  return {
    ...context.user,
    roleKeys: context.user.roles.map((({ role }) => role.key)),
  };
};

export default compose(
  userContext(),
)(
  queryMe,
);
