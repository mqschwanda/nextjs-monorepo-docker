'use client';

import { useLogsQuery } from '@mqs/graphql-client';
import { PlaceholderContent } from '@mqs/react-server-components';
import LogsTableBodyLoading from '../LogsTableBodyLoading';
import LogsTableBodyRow from '../LogsTableBodyRow';

export default function LogsTableBody() {
  const { data, loading } = useLogsQuery();

  if (loading) {
    return (
      <LogsTableBodyLoading />
    );
  }

  if (!data) {
    return (
      <tr>
        <td
          colSpan={4}
        >
          <PlaceholderContent
            contentDescription='An unexpected error occurred. Could not fetch logs from the database.'
            contentTitle='Error Fetching Logs'
          />
        </td>
      </tr>
    );
  }

  if (data.logs.length === 0) {
    return (
      <tr>
        <td
          colSpan={4}
        >
          <PlaceholderContent
            contentDescription='No logs currently exist in the database.'
            contentTitle='No Logs Found'
          />
        </td>
      </tr>
    );
  }

  return (
    <tbody>
      { data.logs.map((log) => (
        <LogsTableBodyRow
          key={log.id}
          log={log}
        />
      )) }
    </tbody>
  );
}
