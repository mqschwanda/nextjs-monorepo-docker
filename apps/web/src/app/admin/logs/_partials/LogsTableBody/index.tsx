'use client';

import { useLogsQuery } from '@mqs/graphql-client';
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
    // TODO: handle empty state
    return (
      <LogsTableBodyLoading />
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
