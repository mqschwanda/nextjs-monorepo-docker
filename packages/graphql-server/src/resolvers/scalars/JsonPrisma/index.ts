import { GraphQLScalarType, Kind } from 'graphql';

export default new GraphQLScalarType({
  description: 'JSON Prisma custom scalar type',
  name: 'JsonPrisma',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return parseInt(ast.value, 10);
    }

    if (ast.kind === Kind.BOOLEAN) {
      // Convert hard-coded AST string to integer and then to Date
      return !!ast.value;
    }

    // Invalid hard-coded value
    return null;
  },
  parseValue(value) {
    const data = value as any;

    return JSON.parse(JSON.stringify(data));
  },
  serialize(value) {
    const data = value as any;

    return JSON.parse(JSON.stringify(data));
  },
});
