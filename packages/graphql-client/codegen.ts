import path from 'path';
import { CodegenConfig } from '@graphql-codegen/cli';
import {
  buildDir,
  documentsGlob,
  reactApolloVersion,
  schemaGlob,
} from '@mqs/graphql-schema/constants';

import graphqlSchemaPackageJson from '@mqs/graphql-schema/package.json';

const graphqlSchemaName = graphqlSchemaPackageJson.name;
const graphqlSchemaPackageJsonMain = graphqlSchemaPackageJson.main.replace(/^.\//, '');
const graphqlSchemaPath = require.resolve(graphqlSchemaName).replace(graphqlSchemaPackageJsonMain, '');

const config: CodegenConfig = {
  documents: [
    path.join(graphqlSchemaPath, buildDir, documentsGlob),
  ],
  generates: {
    [path.join('src', '__generated__', 'document-strings.ts')]: {
      config: {
        documentMode: 'graphQLTag',
        gqlImport: path.join('@', 'utilities', 'gqlString'),
        pureMagicComment: true,
        reactApolloVersion,
      },
      plugins: [
        'typescript-document-nodes',
      ],
      preset: 'import-types',
      presetConfig: {
        typesPath: graphqlSchemaName,
      },
    },
    [path.join('src', '__generated__', 'react-apollo.ts')]: {
      config: {
        pureMagicComment: true,
        reactApolloVersion,
      },
      plugins: [
        'typescript-react-apollo',
      ],
      preset: 'import-types',
      presetConfig: {
        typesPath: graphqlSchemaName,
      },
    },
  },
  hooks: {
    afterAllFileWrite: 'yarn eslint --config .eslintrc.codegen.js --fix',
  },
  schema: [
    {
      [path.join(graphqlSchemaPath, buildDir, schemaGlob)]: {
        noRequire: true,
      },
    },
  ],
};

export default config;
