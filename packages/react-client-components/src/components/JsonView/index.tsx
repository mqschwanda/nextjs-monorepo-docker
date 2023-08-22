'use client';

import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { ReactCxProps } from '@mqs/react-utils';
import cx from 'classnames';
import type { ReactJsonViewProps } from 'react-json-view';
import { ComponentType, lazy } from 'react';

const ReactJsonView = lazy<ComponentType<ReactJsonViewProps>>(
  () => import('react-json-view'),
);

export interface JsonViewProps
  extends ReactTestingProps,
  ReactCxProps,
  ReactJsonViewProps {
  className?: string;
}

export function JsonView({
  className,
  cx: cxProp,
  testId = 'JsonView',
  ...rest
}: JsonViewProps) {
  return (
    <div
      className={cx(
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
    >
      { document && window ? (
        <ReactJsonView
          {...rest} // eslint-disable-line react/jsx-props-no-spreading
        />
      ) : null }
    </div>

  );
}
