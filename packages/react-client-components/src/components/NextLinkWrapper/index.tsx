'use client';

import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement, useMemo } from 'react';

export interface NextLinkWrapperProps extends Omit<LinkProps, 'legacyBehavior' | 'passHref'>, ReactTestingProps {
  children: ReactElement;
}

export function NextLinkWrapper({
  children,
  testId,
  ...rest
}: NextLinkWrapperProps) {
  const child = useMemo(
    () => cloneElement(
      children,
      spreadReactTestingProps({ testId }),
    ),
    [
      children,
      testId,
    ],
  );

  return (
    <Link
      legacyBehavior
      passHref
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { child }
    </Link>
  );
}
