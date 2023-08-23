'use client';

import { Log } from '@mqs/graphql-schema';
import { JsonView } from '@mqs/react-client-components';
import {
  Modal,
  ModalBody,
  ModalButtonClose,
} from '@mqs/react-server-components';
import { format } from 'date-fns';
import { useCallback, useMemo } from 'react';
import cx from 'classnames';

type LogsTableBodyRowProps = {
  log: Log,
};

export default function LogsTableBodyRow({
  log: {
    createdAt,
    id,
    message,
    payload,
    type,
  },
}: LogsTableBodyRowProps) {
  const modalId = useMemo(
    () => `log-modal-${id}`,
    [
      id,
    ],
  );

  const handleShowModal = useCallback(
    () => {
      const modal = (window as any)[modalId];

      modal.showModal();
    },
    [
      modalId,
    ],
  );

  return (
    <tr>
      <td
        className='text-ellipsis overflow-hidden'
      >
        <span>
          { message }
        </span>
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        <span>
          { type }
        </span>
      </td>
      <td
        className='text-ellipsis overflow-hidden text-center'
      >
        <span>
          { format(new Date(createdAt), 'MM/dd/yyyy HH:mm:ss O') }
        </span>
      </td>
      <td
        className={cx('text-ellipsis overflow-hidden text-center whitespace-nowrap', payload ? 'cursor-pointer' : undefined)}
        onClick={handleShowModal}
      >
        <span>
          { payload ? JSON.stringify(payload) : '-' }
        </span>
        { payload ? (
          <Modal
            id={modalId}
          >
            <ModalBody
              cx={[
                'w-11/12',
                'max-w-[600px]',
                'h-screen',
                'max-h-[600px]',
                'box-content',
              ]}
            >
              <ModalButtonClose />
              <JsonView
                collapsed={false}
                cx={[
                  'text-start',
                  'mt-4',
                  'whitespace-normal',
                ]}
                indentWidth={2}
                name={false}
                quotesOnKeys={false}
                sortKeys
                src={payload as any} // TODO: fix any cast
                theme='hopscotch'
              />
            </ModalBody>
          </Modal>
        ) : null }
      </td>
    </tr>
  );
}
