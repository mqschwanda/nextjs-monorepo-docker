# Development Philosophies

## NPM
- Scripts

  See [repo scripts docs](#scripts)

- Scope
  
  All packages and apps are named under the `@mqs` scope. See [scoped packages](https://docs.npmjs.com/cli/v9/using-npm/scope) for more information. 

## Scripts
Scripts exist at the workspace root, as well as for each individual workspace. See [NPM scripts](https://docs.npmjs.com/cli/v9/using-npm/scripts) and [Yarn scripts](https://yarnpkg.com/configuration/manifest#scripts) for more information.

- `build`
  
  Transpile code and output the build to the `dist/` directory for all workspaces. However, Some packages like Next JS and Storybook will generate a different build directory.

- `clean`
  
  Remove generated files and directories (like `dist/` and `__generated__/`) for all workspaces.

- `codegen`

  Run the automated code generation tool for all workspaces. Each workspace as unique code generation needs, and some workspaces may not use this tool.

- `dev`

  Run the `build` script in development mode, watching files for changes and updating the build output. This script will only run for the workspaces under `apps/` directory to avoid watching too many files. If you need to update a workspace under another directory you should run `yarn workspace @mqs/<WORKSPACE_NAME> dev` in a separate terminal window alongside the `yarn dev` script.

- `lint`

  Statically analyze the source code in all workspaces and find syntax or style errors. 

- `spelling`

  Statically analyze files for spelling errors.

- `lint:fix`

  Run the `lint` script and auto fix code where possible.

- `test`

  Run tests for all workspaces.

## TS Config
- Paths
  
  When re-mapping imports for a local package the `@` wildcard is used to denote the root of the package relative to the `baseUrl`. See [tsconfig paths](https://www.typescriptlang.org/tsconfig#paths) for more information. 
