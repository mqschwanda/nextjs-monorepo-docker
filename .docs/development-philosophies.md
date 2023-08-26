# Development Philosophies

## Apps

### Authentication

Security and convenience is always a tradeoff. In this case, a decision was made to err on the side of security at the cost of performance and convenience. Access and refresh tokens are implemented with JSON web tokens and are integrated into the database for fine-grain control. This allows for refresh token rotation, as well as token invalidation for both access and refresh tokens. Whenever someone makes a request with a refresh token (R1) to get a new access token (A2) and refresh token (R2) pair, both the original access token (A1) and refresh token (R1) are invalidated and are no longer able to be used. If an invalidated refresh token is used, we assume that the token was sent by a malicious actor, and all access tokens and refresh tokens for the associated user are invalidated. 

### Separation of Concerns

Each app has a distinct purpose and features should be implemented in a way that best utilizes each application's technology. 

#### `@mqs/web`

`@mqs/web` is an interactive web app built with the NextJS serverless framework. This app is for all web-based UI/UX and should not be used for data-based API routes. In some situations, API routes may be needed, like for authentication or revalidation. However, these routes should be self-contained and reserved for use cases that another application can not solve.

Data fetching should be handled in react server components using direct access to the database when possible. If it is not possible to leverage this pattern, react client components should be used which request an endpoint on the `@mqs/api` application.

#### `@mqs/api`

`@mqs/api` is a persistent Node application that leverages ExpressJS to serve routes. The main role of this application is to serve as the backbone connecting the database to other client-side applications. For this reason, any API servers (GraphQL or REST) should be implemented with this application.

Any feature that requires a persistent server, like cron jobs and socket connections, should be implemented with `@mqs/api`.

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
