# Development Philosophies

## NPM
- Scope
  All packages and apps are named under the `@mqs` scope. See [scoped packages](https://docs.npmjs.com/cli/v9/using-npm/scope) for more information. 

## TS Config
- Paths
  When re-mapping imports for a local package the `@` wildcard is used to denote the root of the package relative to the `baseUrl`. See [tsconfig paths](https://www.typescriptlang.org/tsconfig#paths) for more information. 
