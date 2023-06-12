import type { Argument as ClassName } from 'classnames';

/**
 * Props for react component that leverages the classnames module.
 */
export interface ReactCxProps {
  /**
   * Argument passed into classnames function.
   *
   * See [classnames docs](https://github.com/JedWatson/classnames).
   */
  cx?: ClassName,
}
