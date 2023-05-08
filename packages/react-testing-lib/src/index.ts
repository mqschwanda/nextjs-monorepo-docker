export type ReactTestingProps = {
  testId?: string,
};

type SpreadReactTestingPropsArgs = ReactTestingProps & Record<string, any>;
export function spreadReactTestingProps({
  testId,
}: SpreadReactTestingPropsArgs) {
  return {
    'data-testid': testId,
  };
}
