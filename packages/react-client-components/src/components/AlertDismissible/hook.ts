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

export interface UseAlertDismissibleOptions {
  onClickDismiss?: OnClickDismiss;
  hiddenDefault?: boolean;
}

export function useAlertDismissible({
  onClickDismiss,
  hiddenDefault,
}: UseAlertDismissibleOptions = {}) {
  const [hidden, setHidden] = useState(!!hiddenDefault);

  const handleClickDismiss: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (event) => {
      if (!onClickDismiss || await onClickDismiss(event)) {
        setHidden(true);
      }
    },
    [
      onClickDismiss,
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
