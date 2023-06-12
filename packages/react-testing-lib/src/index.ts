/**
 * Props for react components that are leveraged during testing and tracking.
 */
export type ReactTestingProps = {
  /**
   * ID used for tracking and testing.
   *
   * This value does not need to be unique.
   */
  testId?: string,
};

/**
 * Generate the props object for testing and tracking that should be spread into the base react component.
 */
export function spreadReactTestingProps<T extends ReactTestingProps>({
  testId,
}: T) {
  return {
    'data-testid': testId,
  };
}
