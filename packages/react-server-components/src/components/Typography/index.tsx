import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

export enum TypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle1 = 'subtitle1',
  subtitle2 = 'subtitle2',
  body1 = 'body1',
  body2 = 'body2',
  button = 'button',
  caption = 'caption',
  overline = 'overline',
}

export interface TypographyProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode,
  gutterBottom?: boolean,
  noWrap?: boolean,
  variant?: keyof typeof TypographyVariant,
}

export function Typography({
  children,
  className,
  gutterBottom: _gutterBottom,
  testId,
  noWrap: _noWrap,
  variant: _variant,
  ...rest
}: TypographyProps) {
  return (
    <span
      className={cx(
        className,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </span>
  );
}

Typography.defaultProps = {
  gutterBottom: false,
  noWrap: false,
  variant: TypographyVariant.body1,
};
