export type GetMaskHalfClassNameOptions = {
  half: boolean,
  i?: number,
};

export function getMaskHalfClassName({
  half,
  i,
}: GetMaskHalfClassNameOptions) {
  if (half) {
    if (typeof i !== 'number') {
      throw new Error('i is not number');
    }

    if (i === 0) {
      return undefined;
    }

    if (i % 2) {
      return 'mask-half-1';
    }

    return 'mask-half-2';
  }

  return undefined;
}
