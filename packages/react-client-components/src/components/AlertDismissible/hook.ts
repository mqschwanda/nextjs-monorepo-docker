import {
  AlertProps,
} from '@mqs/react-server-components';
import {
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from 'react';

export type OnClickDismiss = (
  event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
) => Promise<boolean | void> | boolean | void;

export interface UseAlertDismissibleOptions
  extends AlertProps {
  onClickDismiss?: OnClickDismiss;
  hiddenDefault?: boolean;
}

export function useAlertDismissible(options: UseAlertDismissibleOptions) {
  const [hidden, setHidden] = useState(!!options.hiddenDefault);

  const handleClickDismiss: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      if (!options.onClickDismiss || await options.onClickDismiss(event)) {
        setHidden(true);
      }
    },
    [
      options,
      setHidden,
    ],
  );

  const result = useMemo(
    () => ({
      handleClickDismiss,
      hidden,
      setHidden,
    }),
    [
      hidden,
      handleClickDismiss,
      setHidden,
    ],
  );

  return result;
}
