'use client';

import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps, ReactTestingProps {

}

export function Typography({
  children,
  testId = 'Typography',
  ...rest
}: TypographyProps) {
  return (
    <MuiTypography
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiTypography>
  );
}
