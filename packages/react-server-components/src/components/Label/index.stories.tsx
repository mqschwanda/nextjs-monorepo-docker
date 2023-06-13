import type { Meta } from '@storybook/react';
import { StoryObjReact } from '@mqs/storybook-utils';
import {
  Label,
  InputText,
  FormControl,
} from '@';

const meta: Meta<typeof Label> = {
  component: Label,
  title: '@mqs/react-server-components/components/Label',
};

export default meta;

type LabelStoryObj = StoryObjReact<typeof Label>;

export const LabelExample: LabelStoryObj = {
  args: {
    children: 'Label:',
    htmlFor: 'example-input',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    htmlFor,
    ...props
  }) => (
    <FormControl>
      <Label
        htmlFor={htmlFor}
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
      <InputText
        bordered
        id={htmlFor}
        placeholder='type here...'
      />
    </FormControl>
  ),
};
