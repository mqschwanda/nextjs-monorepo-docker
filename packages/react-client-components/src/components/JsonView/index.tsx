'use client';

import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import ReactJsonView, { ReactJsonViewProps } from 'react-json-view';
import { ReactCxProps } from '@mqs/react-utils';
import cx from 'classnames';

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
      <ReactJsonView
        {...rest} // eslint-disable-line react/jsx-props-no-spreading
      />
    </div>

  );
}
