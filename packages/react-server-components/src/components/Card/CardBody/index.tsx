import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<CardBody />` component.
 */
export interface CardBodyProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

/**
 * Container for content inside `<Card />` component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-card--docs) for more information.
 */
export function CardBody({
  children,
  className,
  cx: cxProp,
  testId = 'CardBody',
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
