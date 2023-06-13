import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<SkeletonDiv />` component.
 */
export interface SkeletonDivProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {

}

/**
 * Placeholder generic component with a pulsing (fade in and out) animation used for loading.
 */
export function SkeletonDiv({
  className,
  cx: cxProp,
  testId = 'SkeletonDiv',
  ...rest
}: SkeletonDivProps) {
  return (
    <div
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
