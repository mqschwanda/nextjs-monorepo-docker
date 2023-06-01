import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

/**
 * Props for the `<CardBody />` component.
 */
export interface CardBodyProps
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
 * Container for content inside `<Card />` component.
 */
export function CardBody({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardBodyProps) {
  return (
    <div
      className={cx(
        'card-body',
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
