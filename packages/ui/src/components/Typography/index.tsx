import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

export interface TypographyProps extends MuiTypographyProps {

}

export function Typography({
  children,
  ...rest
}: TypographyProps) {
  return (
    <MuiTypography
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiTypography>
  );
}
