import cookie from 'cookie';
import { Tokens } from '@mqs/tokens';
import { GraphQLResolveInfo } from 'graphql';
import { ContextType } from 'context';
import { AuthenticationError } from 'errors';

type AuthenticateOptions = {
  throwErrors: boolean
};

export const authenticate = (
  options: AuthenticateOptions = {
    throwErrors: true,
  },
) => async <
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
        if (options.throwErrors) {
          throw error;
        }
      }
    }
  }

  if (context.user || !options.throwErrors) {
    return [parent, args, context, info] as [TParent, TArgs, TContext, GraphQLResolveInfo];
  }

  throw new AuthenticationError();
};

export default authenticate;
