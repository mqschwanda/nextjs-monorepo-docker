export default function buildEnumCx<
  Variant extends Record<string, string>,
>(
  variantEnum: Variant,
  variantProp?: keyof Variant,
) {
  if (!variantProp) {
    return undefined;
  }

  return variantEnum[variantProp];
}
