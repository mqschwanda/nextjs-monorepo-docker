import { Resolvers } from '@mqs/graphql-schema';
import { ContextType } from 'context';
import parentJSON from 'parent-package-json';
import { compose } from '@/resolvers/middleware';

type QueryVersion = NonNullable<NonNullable<Resolvers<ContextType>['Query']>['version']>;

const queryVersion: QueryVersion = async (_parent, _args, _context, _info) => {
  const parentPackageJson = parentJSON({});
  const packageJsonPath = parentPackageJson.path.relative;

  if (packageJsonPath) {
    const packageJson = await import(require.resolve(packageJsonPath));

    if (packageJson) {
      return packageJson.version;
    }
  }

  return 'N/A';
};

export default compose()(
  queryVersion,
);
