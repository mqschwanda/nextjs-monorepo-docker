import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';
import { Button, ButtonProps } from '@/components/Button';
import { IconClose } from '@/components/Icon';

/**
 * Props for the `<ModalButtonClose />` component.
 */
export interface ModalButtonCloseProps
  extends ReactTestingProps,
  ReactCxProps,
  Omit<ButtonProps, 'children' | 'type'> {

}

/**
 * CLose button for inside `<ModalBody />` component.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-modal--docs) for more information.
 */
export function ModalButtonClose({
  className,
  cx: cxProp,
  testId = 'ModalButtonClose',
  variantColor = 'ghost',
  variantShape = 'circle',
  variantSize = 'sm',
  ...rest
}: ModalButtonCloseProps) {
  return (
    <Button
      className={cx(
        'absolute',
        'right-2',
        'top-2',
        className,
        cxProp,
      )}
      type='submit'
      variantColor={variantColor}
      variantShape={variantShape}
      variantSize={variantSize}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      <IconClose
        cx={[
          'h-4',
          'w-4',
        ]}
      />
    </Button>
  );
}
