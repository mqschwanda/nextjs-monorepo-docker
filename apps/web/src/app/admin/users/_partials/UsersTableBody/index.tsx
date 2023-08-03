import { prisma } from '@mqs/prisma/client';
import { format } from 'date-fns';

async function getUsers() {
  const users = await prisma.user.findMany({
    select: {
      createdAt: true,
      email: true,
      id: true,
      nameFirst: true,
      nameLast: true,
      roles: {
        select: {
          role: true,
        },
      },
    },
  });

  return users;
}

export default async function UsersTableBody() {
  const users = await getUsers();

  return (
    <tbody>
      { users.map(({
        email,
        createdAt,
        id,
        nameFirst,
        nameLast,
        roles,
      }) => (
        <tr
          key={id}
        >
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { email }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { format(createdAt, 'MM/dd/yyyy HH:mm:ss O') }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { nameLast }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { nameFirst }
            </span>
          </td>
          <td
            className='text-ellipsis overflow-hidden'
          >
            <span>
              { roles.length === 0 ? 'none' : roles.map(({ role }) => role.name).join(', ') }
            </span>
          </td>
        </tr>
      )) }
    </tbody>
  );
}
