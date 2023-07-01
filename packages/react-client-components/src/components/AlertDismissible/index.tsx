'use client';

import {
  Alert,
  AlertProps,
  Button,
  IconClose,
} from '@mqs/react-server-components';
import cx from 'classnames';
import {
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useState,
} from 'react';

type OnClickDismiss = (
  event: MouseEvent<HTMLButtonElement,
  globalThis.MouseEvent>
) => boolean | void;

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
  const [hidden, setHidden] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (!onClickDismiss || onClickDismiss(event)) {
        setHidden(true);
      }
    },
    [
      onClickDismiss,
    ],
  );

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
        onClick={handleClick}
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
