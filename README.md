# Next JS Monorepo Docker

## Storybook

To see live example you can visit [github pages](https://mqschwanda.github.io/nextjs-monorepo-docker/).

## Development Philosophies

For a detailed explanation of why certain decisions were made and what guidelines should be followed review the [development philosophies documentation](.docs/development-philosophies.md) 


## Quick Start

### Setup

1. [Install yarn package manager](https://classic.yarnpkg.com/en/docs/install#debian-stable) if you do not already have it on your system.

2. From project root run the yarn cli to install all dependencies

  ```bash
  yarn install
  ```

### Development

#### Run Apps

1. Run the docker build command
    ```bash
    yarn docker-compose-build:dev
    ```
2. Run the docker run command
    ```bash
    yarn docker-compose-run:dev
    ```

  NOTE: If you have not setup the database make sure to run the setup database commands.

#### Setup Database

1. Run the database migration command
    ```bash
    docker-compose-prisma-migrate:dev
    ```
2. Run the database reset command
    ```bash
    docker-compose-prisma-migrate-reset:dev
    ```

#### Flatten Migrations

1. Run the database initial migration command
    ```bash
    docker-compose-prisma-migrate-initial:dev
    ```

#### Troubleshooting

##### File Watcher Limit

Error: `ENOSPC: System limit for number of file watchers reached`

[Stack Overflow solution](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached) for updating max file watchers

###### NOTE

You should not run into this issue unless you are trying to run all (or many) workspaces dev modes at once. Having this many file watchers will crash some systems, and slow down most. Instead of watching all workspaces it is recommended that the root `yarn dev` script is used and any other packages that are needed are run in a separate terminal window with `yarn workspace @mqs/<WORKSPACE_NAME> dev`.

### Production

#### Run Apps

1. Create an `.env.prod` file be either copying the `.env.dev` or `.env.prod.example` files and making the necessary changes. 
    
    Note: This only needs to be done once, so you can skip to step 2 if this is not the first time starting up a production instance.

    - copy the development env file and use it as the production env file
        ```bash
        cp .env.dev .env.prod
        ```
    - copy the production example env file and use it as the production env file
        ```bash
        cp .env.prod.example .env.prod
        ```
    After copying the file, make sure to update `.env.prod` with the proper values

2. Run the docker build command
    ```bash
    yarn docker-compose-build:prod
    ```
3. Run the docker run command
    ```bash
    yarn docker-compose-run:prod
    ```

Open http://localhost:3000.

To shutdown all running containers:

```bash
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
- `errors`: utilities to handle errors
- `eslint-config`: shared `eslint` configurations
- `graphql-client`: react client and api utilities for graphql
- `graphql-schema`: graphql schema and types
- `graphql-server`: graphql server and resolvers
- `jest-preset`: Jest configurations
- `jobs`: server workers and utilities
- `logger`: Isomorphic logger (a small wrapper around console.log)
- `prisma`: Database ORM
- `react-client-components`: a React client component library
- `react-server-components`: a React server component library
- `react-testing-lib`: a React testing library
- `react-utils`: a React utilities library
- `storybook`: a package to build and deploy [Storybook](https://storybook.js.org/) documentation
- `storybook-utils`: utilities for implementing Storybook
- `style`: shared css and style utilities for components and apps
- `tailwind-config`: a generalized [Tailwind CSS](https://tailwindcss.com/) configuration
- `tokens`: utility to handle access and refresh tokens
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
- [PostgreSQL](https://www.postgresql.org/) Open Source Relational Database
- [Prisma](https://www.prisma.io/) Database ORM for Node and TypeScript
- [Storybook](https://storybook.js.org/) for documentation
- [Tailwind CSS](https://tailwindcss.com/) for style
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Zod](https://zod.dev/) for schema validation with static type inference
