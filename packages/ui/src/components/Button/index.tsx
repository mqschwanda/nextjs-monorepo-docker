import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps, ReactTestingProps {

}

export function Button({
  children,
  type = 'button',
  variant = 'contained',
  testId,
  ...rest
}: ButtonProps) {
  return (
    <MuiButton
      type={type}
      variant={variant}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiButton>
  );
}
