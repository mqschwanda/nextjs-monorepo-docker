'use client';

import { Log } from '@mqs/graphql-schema';
import { format } from 'date-fns';

type LogsTableBodyRowProps = {
  log: Log,
};

export default function LogsTableBodyRow({
  log: {
    createdAt,
    message,
    payload,
    type,
  },
}: LogsTableBodyRowProps) {
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
        className='text-ellipsis overflow-hidden text-center'
      >
        <span>
          { payload ? JSON.stringify(payload) : '-' }
        </span>
      </td>
    </tr>
  );
}
