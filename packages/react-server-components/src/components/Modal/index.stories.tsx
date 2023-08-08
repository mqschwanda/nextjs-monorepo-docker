import type { Meta } from '@storybook/react';
import type { StoryObjReact } from '@mqs/storybook-utils';
import {
  Modal,
  ModalBody,
  ModalButtonClose,
} from '@';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: '@mqs/react-server-components/components/Modal',
};

export default meta;

type ModalStoryObj = StoryObjReact<typeof Modal>;

export const ModalExample: ModalStoryObj = {
  args: {
    // cspell:disable
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis.',
    // cspell:enable
  },
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
  },
  render: ({
    children,
    ...props
  }) => (
    <Modal
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    >
      <ModalBody>
        <ModalButtonClose />
        { children }
      </ModalBody>
    </Modal>
  ),
};
