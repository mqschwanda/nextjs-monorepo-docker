import { SkeletonSpan } from '@mqs/react-server-components';

const rows = Array.from({ length: 50 }, (_, i) => i + 1);

export default function LogsTableBodyLoading() {
  return (
    <tbody>
      { rows.map((row) => (
        <tr
          key={row}
        >
          <td>
            <SkeletonSpan
              cx={[
                'w-full',
              ]}
            />
          </td>
          <td>
            <SkeletonSpan
              cx={[
                'w-full',
              ]}
            />
          </td>
          <td>
            <SkeletonSpan
              cx={[
                'w-full',
              ]}
            />
          </td>
          <td>
            <SkeletonSpan
              cx={[
                'w-full',
              ]}
            />
          </td>
        </tr>
      )) }
    </tbody>
  );
}
