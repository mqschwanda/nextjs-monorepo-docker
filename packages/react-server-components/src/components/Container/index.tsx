import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import styles from './styles.module.css';

export interface ContainerProps
  extends ReactTestingProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
}

export function Container({
  children,
  className,
  testId,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cx(styles.Container, className)}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </div>
  );
}
