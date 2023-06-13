import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<Label />` component.
 */
export interface LabelProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {

}

/**
 * Label to associate helper text with an input component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-label--docs) for more information.
 */
export function Label({
  children,
  className,
  cx: cxProp,
  testId = 'Label',
  ...rest
}: LabelProps) {
  return (
    <label
      className={cx(
        'label',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </label>
  );
}
