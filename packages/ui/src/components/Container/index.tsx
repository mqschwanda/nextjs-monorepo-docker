import MuiContainer, { ContainerProps as MuiContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MuiContainerProps {

}

export function Container({
  children,
  ...rest
}: ContainerProps) {
  return (
    <MuiContainer
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </MuiContainer>
  );
}
