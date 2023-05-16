import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

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
  gutterBottom,
  testId,
  noWrap,
  variant,
  ...rest
}: TypographyProps) {
  return (
    <span
      className={cx(
        className,
        styles.Typography,
        {
          [styles.Typography_gutterBottom]: gutterBottom,
          [styles.Typography_noWrap]: noWrap,
          [styles.Typography_variant_h1]: variant === TypographyVariant.h1,
          [styles.Typography_variant_h2]: variant === TypographyVariant.h2,
          [styles.Typography_variant_h3]: variant === TypographyVariant.h3,
          [styles.Typography_variant_h4]: variant === TypographyVariant.h4,
          [styles.Typography_variant_h5]: variant === TypographyVariant.h5,
          [styles.Typography_variant_h6]: variant === TypographyVariant.h6,
          [styles.Typography_variant_subtitle1]: variant === TypographyVariant.subtitle1,
          [styles.Typography_variant_subtitle2]: variant === TypographyVariant.subtitle2,
          [styles.Typography_variant_body1]: variant === TypographyVariant.body1,
          [styles.Typography_variant_body2]: variant === TypographyVariant.body2,
          [styles.Typography_variant_button]: variant === TypographyVariant.button,
          [styles.Typography_variant_caption]: variant === TypographyVariant.caption,
          [styles.Typography_variant_overline]: variant === TypographyVariant.overline,
        },
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
