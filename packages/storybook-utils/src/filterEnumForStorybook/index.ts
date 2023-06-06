const DOCGEN_ENUM_KEYS = [
  'displayName',
  '__docgenInfo',
];

export default function filterEnumForStorybook<Enum extends Record<string, any>>(
  _enum: Enum,
) {
  return Object
    .keys(_enum)
    .filter((value) => !DOCGEN_ENUM_KEYS.includes(value)) as Array<keyof Enum>;
}
