import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<CardTitle />` component.
 */
export interface CardTitleProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

/**
 * Title of `<Card />` component.
 */
export function CardTitle({
  children,
  className,
  cx: cxProp,
  testId = 'CardTitle',
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
