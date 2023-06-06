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

```
yarn dev
```

#### Troubleshooting

##### File Watcher Limit

Error: `ENOSPC: System limit for number of file watchers reached`

[Stack Overflow solution](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached) for updating max file watchers


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
- `storybook`: a package to build and deploy [Storybook](https://storybook.js.org/) documentation
- `storybook-utils`: utilities for implementing Storybook
- `style`: shared css and style utilities for components and apps
- `tailwind-config`: a generalized [Tailwind CSS](https://tailwindcss.com/) configuration
- `tsconfig`: tsconfig.json;s used throughout the monorepo
#### Scripts
- `tsc`: a script to turn typescript source code into javascript

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create app_network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Remote Caching

This example includes optional remote caching. In the Dockerfiles of the apps, uncomment the build arguments for `TURBO_TEAM` and `TURBO_TOKEN`. Then, pass these build arguments to your Docker build.

You can test this behavior using a command like:

`docker build -f apps/web/Dockerfile . --build-arg TURBO_TEAM=“your-team-name” --build-arg TURBO_TOKEN=“your-token“ --no-cache`

### Utilities

This Turborepo has some additional tools already setup for you:

- [CSpell](https://cspell.org/) for spell checking
- [ESLint](https://eslint.org/) for code linting
- [GraphQL](https://graphql.org/) from fetching data
- [GraphQL CodeGen](https://github.com/dotansimha/graphql-code-generator) for automated code generation
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Storybook](https://storybook.js.org/) for documentation
- [Tailwind CSS](https://tailwindcss.com/) for style
- [TypeScript](https://www.typescriptlang.org/) for static type checking
