import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ReactNode } from 'react';

export interface ContainerProps extends ReactTestingProps {
  children: ReactNode,
}

export function Container({
  children,
  testId,
  ...rest
}: ContainerProps) {
  return (
    <div
      data-example='hasdasdi'
      id='hi'
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </div>
  );
}
