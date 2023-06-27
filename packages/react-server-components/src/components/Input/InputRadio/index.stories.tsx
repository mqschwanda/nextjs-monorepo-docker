import type { Meta } from '@storybook/react';
import { StoryObjReact, filterEnumForStorybook } from '@mqs/storybook-utils';
import {
  FormControl,
  InputRadio,
  InputRadioVariantColor,
  InputRadioVariantSize,
  Label,
} from '@';

const meta: Meta<typeof InputRadio> = {
  component: InputRadio,
  title: '@mqs/react-server-components/components/Input/InputRadio',
};

export default meta;

type InputRadioStoryObj = StoryObjReact<typeof InputRadio>;

export const InputRadioExample: InputRadioStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  render: (props) => (
    <FormControl
      cx='w-[200px]'
      label='Example'
    >
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 1' }
          </span>
          <InputRadio
            name='InputRadioExample'
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 2' }
          </span>
          <InputRadio
            name='InputRadioExample'
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
    </FormControl>
  ),
};

export const InputRadioColorExample: InputRadioStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputRadioVariantColor).map((variantColor) => (
    <FormControl
      cx={[
        'my-4',
        'w-[200px]',
      ]}
      label={variantColor}
    >
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 1' }
          </span>
          <InputRadio
            name={`InputRadio-${variantColor}`}
            variantColor={variantColor}
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 2' }
          </span>
          <InputRadio
            name={`InputRadio-${variantColor}`}
            variantColor={variantColor}
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
    </FormControl>
  )),
};

export const InputRadioSizeExample: InputRadioStoryObj = {
  args: {

  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: (props) => filterEnumForStorybook(InputRadioVariantSize).map((variantSize) => (
    <FormControl
      cx={[
        'my-4',
        'w-[200px]',
      ]}
      label={variantSize}
    >
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 1' }
          </span>
          <InputRadio
            name={`InputRadio-${variantSize}`}
            variantSize={variantSize}
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
      <FormControl>
        <Label>
          <span
            className='label-text'
          >
            { 'Option 2' }
          </span>
          <InputRadio
            name={`InputRadio-${variantSize}`}
            variantSize={variantSize}
            {...props} // eslint-disable-line react/jsx-props-no-spreading
          />
        </Label>
      </FormControl>
    </FormControl>
  )),
};
