import { render } from '@testing-library/react';
import initStoryshots from '@/__tests__/initStoryshots';
import {
  Modal,
  ModalButtonClose,
  ModalBody,
} from '@';

initStoryshots({
  storyKindRegex: /^@mqs\/react-server-components\/components\/Modal$/,
});

describe('@mqs/react-server-components', () => {
  describe('components', () => {
    describe('<Modal />', () => {
      it('renders', () => {
        const testId = Modal.name;
        const children = 'children...';

        const { getByTestId, asFragment } = render((
          <Modal
            className='test'
          >
            <ModalBody>
              <ModalButtonClose />
              <p>
                { children }
              </p>
            </ModalBody>
          </Modal>
        ));

        const element = getByTestId(testId);
        expect(element).toBeTruthy();

        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
