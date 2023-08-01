import { SkeletonSpan } from '@mqs/react-server-components';

const rows = Array.from({ length: 50 }, (_, i) => i + 1);

export default function UsersTableLoading() {
  return (
    <table
      className='table table-pin-rows'
    >
      <thead>
        <tr>
          <th>{ 'Email' }</th>
          <th>{ 'Created At' }</th>
          <th>{ 'Last Name' }</th>
          <th>{ 'First Name' }</th>
          <th>{ 'Roles' }</th>
        </tr>
      </thead>
      <tbody>
        { rows.map((row) => (
          <tr
            key={row}
          >
            <td
              colSpan={5}
            >
              <SkeletonSpan
                cx={[
                  'w-full',
                ]}
              />
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
