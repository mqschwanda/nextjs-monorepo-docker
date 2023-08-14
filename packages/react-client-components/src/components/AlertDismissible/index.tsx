'use client';

import {
  Alert,
  AlertProps,
  Button,
  IconClose,
} from '@mqs/react-server-components';
import cx from 'classnames';
import { OnClickDismiss, useAlertDismissible } from './hook';

export {
  useAlertDismissible,
};
export interface AlertDismissableProps
  extends AlertProps {
  onClickDismiss?: OnClickDismiss
}

export function AlertDismissible({
  children,
  onClickDismiss,
  cx: cxProp,
  testId = 'AlertDismissible',
  ...rest
}: AlertDismissableProps) {
  const {
    handleClickDismiss,
    hidden,
  } = useAlertDismissible({
    onClickDismiss,
  });

  return (
    <Alert
      cx={cx(
        cxProp,
        hidden ? 'hidden' : null,
      )}
      testId={testId}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
      <Button
        onClick={handleClickDismiss}
        type='button'
        variantShape='circle'
        variantSize='sm'
      >
        <IconClose
          cx='h-6 w-6'
        />
      </Button>
    </Alert>
  );
}
