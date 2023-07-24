# Next JS Monorepo Docker

## Storybook

To see live example you can visit [github pages](https://mqschwanda.github.io/nextjs-monorepo-docker/).

## Development Philosophies

For a detailed explanation of why certain decisions were made and what guidelines should be followed review the [development philosophies documentation](docs/development-philosophies.md) 


## Quick Start

### Setup

1. [Install yarn package manager](https://classic.yarnpkg.com/en/docs/install#debian-stable) if you do not already have it on your system.

2. From project root run the yarn cli to install all dependencies

  ```
  yarn install
  ```

### Development

This repo is configured to be built with Docker, and Docker compose. To run all apps in this repo:
```
yarn docker-build:dev
yarn docker-run:dev
```

If you do not want to use docker the alternative command can be used:
```
yarn dev
```

#### Troubleshooting

##### File Watcher Limit

Error: `ENOSPC: System limit for number of file watchers reached`

[Stack Overflow solution](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached) for updating max file watchers

###### NOTE

You should not run into this issue unless you are trying to run all (or many) workspaces dev modes at once. Having this many file watchers will crash some systems, and slow down most. Instead of watching all workspaces it is recommended that the root `yarn dev` script is used and any other packages that are needed are run in a separate terminal window with `yarn workspace @mqs/<WORKSPACE_NAME> dev`.

### Production

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
yarn docker-build:prod
yarn docker-run:prod
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
yarn docker-kill
```

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Workspaces
Each workspace is built with [TypeScript](https://www.typescriptlang.org/).

#### Apps
- `web`: a [Next.js](https://nextjs.org/) app
- `api`: an [Express](https://expressjs.com/) server
#### Packages
- `eslint-config`: shared `eslint` configurations
- `graphql-client`: react client and api utilities for graphql
- `graphql-schema`: graphql schema and types
- `graphql-server`: graphql server and resolvers
- `jest-preset`: Jest configurations
- `logger`: Isomorphic logger (a small wrapper around console.log)
- `react-client-components`: a React client component library
- `react-server-components`: a React server component library
- `react-testing-lib`: a React testing library
- `react-utils`: a React utilities library
- `storybook`: a package to build and deploy [Storybook](https://storybook.js.org/) documentation
- `storybook-utils`: utilities for implementing Storybook
- `style`: shared css and style utilities for components and apps
- `tailwind-config`: a generalized [Tailwind CSS](https://tailwindcss.com/) configuration
- `tsconfig`: tsconfig.json;s used throughout the monorepo
- `zod`: utilities for handling validation with [Zod](https://zod.dev/)
#### Scripts
- `tsc`: a script to turn typescript source code into javascript

### Utilities

This Turborepo has some additional tools already setup for you:

- [CSpell](https://cspell.org/) for spell checking
- [ESLint](https://eslint.org/) for code linting
- [GraphQL](https://graphql.org/) for fetching data
- [GraphQL CodeGen](https://github.com/dotansimha/graphql-code-generator) for automated code generation
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Storybook](https://storybook.js.org/) for documentation
- [Tailwind CSS](https://tailwindcss.com/) for style
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Zod](https://zod.dev/) for schema validation with static type inference
