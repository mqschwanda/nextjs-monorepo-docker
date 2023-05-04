import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

export type TextFieldProps = MuiTextFieldProps;

export function TextField({
  ...rest
}: TextFieldProps) {
  return (
    <MuiTextField
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
