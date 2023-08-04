export default function argvStringFromObject(argv: Record<string, any>) {
  return Object
    .keys(argv)
    .reduce(
      (previousValue, currentValue) => [
        ...previousValue,
        `--${currentValue}=${argv[currentValue]}`,
      ],
      [] as Array<string>,
    );
}
