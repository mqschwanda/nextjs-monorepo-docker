import type { ReactRenderer, StoryObj } from '@storybook/react';
import type { StoryContext } from '@storybook/types';
import type { ComponentProps, JSXElementConstructor } from 'react';

type ArrayOrItem<T> = T | Array<T>;

export type StoryObjReact<
  TComponent extends JSXElementConstructor<any>,
  TArgs = ComponentProps<TComponent>,
> = Omit<StoryObj<TArgs>, 'render'> & {
  render?: (
    args: TArgs,
    context: StoryContext<ReactRenderer, TArgs>
  ) => ArrayOrItem<(ReactRenderer & { T: TArgs; })['storyResult']>;
};
