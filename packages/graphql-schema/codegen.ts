import path from 'path';
import { CodegenConfig } from '@graphql-codegen/cli';
import {
  documentsGlob,
  generatedDir,
  reactApolloVersion,
  schemaGlob,
} from './src/constants';

export const srcDir = 'src';
export const typesPath = './graphql';

const mappers = {
  JobKey: '@mqs/prisma/client/browser#JobKey',
  Log: '@mqs/prisma/client/browser#Log',
  LogType: '@mqs/prisma/client/browser#LogType',
  RoleKey: '@mqs/prisma/client/browser#RoleKey',
  User: '@mqs/prisma/client/browser#User',
};

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
        enumsAsTypes: true,
        mappers,
        namingConvention: 'change-case-all#pascalCase',
        nonOptionalTypename: false,
        scalars: {
          Date: 'Date',
          ID: {
            input: 'string',
            output: 'string | number',
          },
          JSON: 'JSON',
          JsonPrisma: {
            input: 'string | number | boolean | Record<string, any> | Array<any>',
            output: 'string | number | boolean | Record<string, any> | Array<any>',
          },
        },
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
        mappers,
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
