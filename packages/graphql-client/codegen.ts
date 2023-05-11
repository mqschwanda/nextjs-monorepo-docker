import { CodegenConfig } from '@graphql-codegen/cli';
import { buildDir, documentsGlob, reactApolloVersion, schemaGlob } from 'graphql-schema/constants'
import path from 'path';

import graphqlSchemaPackageJson from 'graphql-schema/package.json'

const grahpqlSchemaName = graphqlSchemaPackageJson.name;
const graphqlSchemaPackageJsonMain = graphqlSchemaPackageJson.main.replace(/^.\//, '');
const graphqlSchemaPath = require.resolve(grahpqlSchemaName).replace(graphqlSchemaPackageJsonMain, '')

const config: CodegenConfig = {
  documents: [
    path.join(graphqlSchemaPath, buildDir, documentsGlob),
  ],
  generates: {
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
        typesPath: grahpqlSchemaName,
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

