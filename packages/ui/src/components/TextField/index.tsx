import { ReactTestingProps, spreadReactTestingProps } from 'react-testing-lib';
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps & ReactTestingProps;

export function TextField({
  testId,
  ...rest
}: TextFieldProps) {
  return (
    <MuiTextField
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
