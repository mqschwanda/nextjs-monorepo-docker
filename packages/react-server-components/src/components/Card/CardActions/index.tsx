import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

/**
 * Props for the `<CardActions />` component.
 */
export interface CardActionsProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * Argument passed into classnames function.
   *
   * See [classnames docs](https://github.com/JedWatson/classnames).
   */
  cx?: ClassName,
}

/**
 * Container for buttons inside `<Card />` component.
 */
export function CardActions({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardActionsProps) {
  return (
    <div
      className={cx(
        'card-actions',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </div>
  );
}
