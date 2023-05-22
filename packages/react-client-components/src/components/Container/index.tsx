'use client';

import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import MuiContainer, { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MuiContainerProps, ReactTestingProps {

}

export function Container({
  children,
  testId,
  ...rest
}: ContainerProps) {
  return (
    <MuiContainer
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiContainer>
  );
}
