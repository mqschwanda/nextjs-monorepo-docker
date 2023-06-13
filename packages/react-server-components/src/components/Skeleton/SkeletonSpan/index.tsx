import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<SkeletonSpan />` component.
 */
export interface SkeletonSpanProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, 'children'> {

}

/**
 * Placeholder text component with a pulsing (fade in and out) animation used for loading.
 */
export function SkeletonSpan({
  className,
  cx: cxProp,
  testId = 'SkeletonSpan',
  ...rest
}: SkeletonSpanProps) {
  return (
    <span
      className={cx(
        'animate-pulse',
        'bg-neutral-content',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
