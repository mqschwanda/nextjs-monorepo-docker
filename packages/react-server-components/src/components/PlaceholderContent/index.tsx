import { ReactTestingProps, spreadReactTestingProps } from '@mqs/react-testing-lib';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import { ReactCxProps } from '@mqs/react-utils';

/**
 * Props for the `<PlaceholderContent />` component.
 */
export interface ContentBoxProps
  extends ReactTestingProps,
  ReactCxProps,
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * The title for the `<PlaceholderContent />` component
   */
  contentTitle?: string,
  /**
   * The description for the `<PlaceholderContent />` component
   */
  contentDescription?: string,
}

/**
 * A component for rendering placeholder content.
 *
 * See [interactive docs](https://mqschwanda.github.io/nextjs-monorepo-docker/?path=/docs/mqs-react-server-components-components-placeholdercontent--docs) for more information.
 */
export function PlaceholderContent({
  children,
  className,
  cx: cxProp,
  testId = 'PlaceholderContent',
  contentTitle,
  contentDescription,
  ...rest
}: ContentBoxProps) {
  return (
    <div
      className={cx(
        'm-auto',
        'p-8',
        'prose',
        'text-center',
        className,
        cxProp,
      )}
      {...spreadReactTestingProps({ testId })} // eslint-disable-line react/jsx-props-no-spreading
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { contentTitle ? (
        <h4>
          { contentTitle }
        </h4>
      ) : null }
      { contentDescription ? (
        <p>
          { contentDescription }
        </p>
      ) : null }
      { children }
    </div>
  );
}
