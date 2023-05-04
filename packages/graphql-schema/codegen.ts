import { CodegenConfig } from '@graphql-codegen/cli';
import path from 'path';

const GRAPHQL_SCHEMA_GLOB = 'src/schema/*.graphql';
const GRAPHQL_GENERATED_DIR = 'src/__generated__/';
const APOLLO_VERSION = 3;

const typesPath = './graphql';
const reactApolloVersion = APOLLO_VERSION;

const config: CodegenConfig = {
  documents: [
    './src/**/*.graphql',
  ],
  generates: {
    [GRAPHQL_GENERATED_DIR]: {
      config: {
        arrayInputCoercion: false,
        avoidOptionals: false,
        dedupeFragments: true,
        defaultScalarType: 'any',
        enumsAsTypes: false,
        namingConvention: 'change-case-all#pascalCase',
        nonOptionalTypename: false,
        scalars: {},
        skipTypename: true,
        strictScalars: true,
        useTypeImports: false,
      },
      plugins: [

      ],
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
        typesPath,
      },
    },
    [path.join(GRAPHQL_GENERATED_DIR, 'react-apollo.ts')]: {
      config: {
        pureMagicComment: true,
        reactApolloVersion,
      },
      plugins: [
        'typescript-react-apollo',
      ],
      preset: 'import-types',
      presetConfig: {
        typesPath,
      },
    },
    [path.join(GRAPHQL_GENERATED_DIR, 'resolvers.ts')]: {
      config: {
        reactApolloVersion,
      },
      plugins: [
        'typescript-resolvers',
      ],
      preset: 'import-types',
      presetConfig: {
        typesPath,
      },
    },
  },
  hooks: {
    afterAllFileWrite: 'yarn eslint --config .eslintrc.codegen.js --fix',
  },
  schema: [
    {
      [GRAPHQL_SCHEMA_GLOB]: {
        noRequire: true,
      },
    },
  ],
};

export default config;

