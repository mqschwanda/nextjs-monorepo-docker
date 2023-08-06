import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';

type UserContextOptions = {

};

export default function userContext(
  _options: UserContextOptions = {

  },
) {
  return async <
    TParent extends {},
    TContext extends ContextType,
    TArgs extends {},
  >(
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
  ) => {
    const cookies = context.request.headers.get('cookie');

    if (cookies) {
      const { access } = cookie.parse(cookies);

      if (access) {
        try {
          const token = await Tokens.verifyAccessToken(access);

          context.user = token.user;
        } catch (error) {
          console.log(error);
        }
      }
    }

    return [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo];
  };
}
