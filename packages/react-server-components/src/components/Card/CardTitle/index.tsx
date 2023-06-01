import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx, { Argument as ClassName } from 'classnames';

/**
 * Props for the `<CardTitle />` component.
 */
export interface CardTitleProps
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
 * Title of `<Card />` component.
 */
export function CardTitle({
  children,
  className,
  cx: cxProp,
  testId,
  ...rest
}: CardTitleProps) {
  return (
    <span
      className={cx(
        'card-title',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </span>
  );
}
