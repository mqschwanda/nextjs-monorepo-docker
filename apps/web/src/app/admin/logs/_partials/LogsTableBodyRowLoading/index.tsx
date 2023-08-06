import { Stack } from '@mqs/react-client-components';
import { Button, SkeletonSpan } from '@mqs/react-server-components';

export default function LogsTableBodyRowLoading() {
  return (
    <tr>
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
      <td>
        <SkeletonSpan
          cx={[
            'w-full',
          ]}
        />
      </td>
      <td>
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='center'
        >
          <Button
            loading
          />
          <Button
            loading
          />
        </Stack>
      </td>
    </tr>
  );
}
