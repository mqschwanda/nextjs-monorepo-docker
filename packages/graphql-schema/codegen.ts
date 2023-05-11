import { CodegenConfig } from '@graphql-codegen/cli';
import { 
  documentsGlob, 
  generatedDir, 
  reactApolloVersion, 
  schemaGlob, 
} from './src/constants'
import path from 'path';

export const srcDir = 'src';
export const typesPath = './graphql';

const config: CodegenConfig = {
  documents: [
    path.join(srcDir, documentsGlob),
  ],
  generates: {
    [path.join(srcDir, generatedDir, '/')]: {
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
    [path.join(srcDir, generatedDir, 'resolvers.ts')]: {
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
      [path.join(srcDir, schemaGlob)]: {
        noRequire: true,
      },
    },
  ],
};

export default config;

