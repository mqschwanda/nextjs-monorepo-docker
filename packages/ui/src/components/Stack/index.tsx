import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

export interface StackProps extends MuiStackProps {

}

export function Stack({
  children,
  ...rest
}: StackProps) {
  return (
    <MuiStack
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiStack>
  );
}
