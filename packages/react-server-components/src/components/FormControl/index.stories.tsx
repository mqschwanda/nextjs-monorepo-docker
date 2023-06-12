import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  FormControl,
  InputText,
} from '@';

const meta: Meta<typeof FormControl> = {
  component: FormControl,
  title: '@mqs/react-server-components/components/FormControl',
};

export default meta;

type FormControlStoryObj = StoryObjReact<typeof FormControl>;

export const FormControlExample: FormControlStoryObj = {
  args: {
    description: 'input description goes here',
    label: 'Text Input:',
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => (
    <FormControl
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <InputText
        bordered
        error={Boolean(props.error)}
        placeholder='type here...'
        type='text'
      />
    </FormControl>
  ),
};
