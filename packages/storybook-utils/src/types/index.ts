import type { ReactRenderer, StoryObj } from '@storybook/react';
import type { Args, StoryContext } from '@storybook/types';

type ArrayOrItem<T> = T | Array<T>;

export type StoryObjReact<TArgs = Args> = Omit<StoryObj<TArgs>, 'render'> & {
  render?: (
    args: TArgs,
    context: StoryContext<ReactRenderer, TArgs>
  ) => ArrayOrItem<(ReactRenderer & { T: TArgs; })['storyResult']>;
};
