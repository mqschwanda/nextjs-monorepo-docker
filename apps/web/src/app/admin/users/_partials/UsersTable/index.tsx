import { prisma } from '@mqs/prisma/client';

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

export default async function UsersTable() {
  const users = await getUsers();

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
            <td>{ email }</td>
            <td>{ createdAt.toString() }</td>
            <td>{ nameLast }</td>
            <td>{ nameFirst }</td>
            <td>{ roles.map(({ role }) => role.name).join(', ') }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}
