import { GraphQLScalarType, Kind } from 'graphql';

type DateConstructorParameter = ConstructorParameters<typeof Date>[0];

type DateOrUndefined<
  Value extends any,
> = Value extends DateConstructorParameter
  ? Date
  : undefined;

function coerceDateOrUndefined<
  Value extends any,
  FormatFunction extends (
    value: Value & {}
  ) => Date,
>(
  value: Value,
  formatFunction?: FormatFunction,
): DateOrUndefined<Value> {
  if (
    value === undefined
    || value === null
    || (
      typeof value !== 'string'
      && typeof value !== 'number'
      && !((value as any) instanceof Date)
      && Object.prototype.toString.call(value) !== '[object Date]'
    )
  ) {
    return <DateOrUndefined<Value>>undefined;
  }

  if (formatFunction) {
    const formatValue = formatFunction(value);

    if (typeof formatValue === 'string') {
      const timestamp = Date.parse(formatValue);
      return <DateOrUndefined<Value>>(new Date(timestamp));
    }
    return <DateOrUndefined<Value>>(new Date(formatValue));
  }

  try {
    if (typeof value === 'string') {
      const timestamp = Date.parse(value);
      return <DateOrUndefined<Value>>(new Date(timestamp));
    }
    const date = new Date(value as any);
    return <DateOrUndefined<Value>>date;
  } catch { } // eslint-disable-line no-empty

  return <DateOrUndefined<Value>>undefined;
}

export default new GraphQLScalarType({
  description: 'Date custom scalar type',
  name: 'Date',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
  parseValue(value) {
    const date = coerceDateOrUndefined(value as any);
    if (typeof date === 'undefined') {
      throw new Error('GraphQL Date Scalar parser expected a `number`');
    }
    return date; // Convert incoming integer to Date
  },
  serialize(value) {
    const date = coerceDateOrUndefined(value as any);
    if (typeof date === 'undefined') {
      throw new Error('GraphQL Date Scalar parser expected a value that could be converted into a Date object');
    }
    return date.toISOString(); // Convert incoming integer to Date
  },
});
