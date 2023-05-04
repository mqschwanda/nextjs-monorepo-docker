import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {

}

export function Button({
  children,
  type = 'button',
  variant = 'contained',
  ...rest
}: ButtonProps) {
  return (
    <MuiButton
      type={type}
      variant={variant}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiButton>
  );
}
