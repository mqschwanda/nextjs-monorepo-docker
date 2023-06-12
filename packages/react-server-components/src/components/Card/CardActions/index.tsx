import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<CardActions />` component.
 */
export interface CardActionsProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

/**
 * Container for buttons inside `<Card />` component.
 */
export function CardActions({
  children,
  className,
  cx: cxProp,
  testId = 'CardActions',
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
