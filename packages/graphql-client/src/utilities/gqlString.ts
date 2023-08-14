export default function gqlString(
  [literal]: TemplateStringsArray,
  ...rest: Array<string>
) {
  return [literal, ...rest].join('\r\n');
}
