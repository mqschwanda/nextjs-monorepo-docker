import { ReactTestingProps, spreadReactTestingProps } from 'react-testing-lib';
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';

export interface StackProps extends MuiStackProps, ReactTestingProps {

}

export function Stack({
  children,
  testId,
  ...rest
}: StackProps) {
  return (
    <MuiStack
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiStack>
  );
}
