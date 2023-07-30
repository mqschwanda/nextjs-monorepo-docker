import bcrypt from 'bcrypt';
import {
  User,
  Role,
  RoleKey,
  prisma,
} from '../client';

async function seed() {
  const roles: Array<Omit<Role, 'id'>> = [
    {
      key: RoleKey.Admin,
      name: 'admin',
    },
  ];

  await Promise.all(
    roles.map((role) => prisma.role.upsert({
      create: role,
      update: {},
      where: {
        key: role.key,
      },
    })),
  );

  const password = await bcrypt.hash('password', 10);
  const users: Array<Omit<User, 'id' | 'createdAt'>> = [
    {
      email: 'admin@email.com',
      nameFirst: 'Admin',
      nameLast: 'Smith',
      password,
    },
    {
      email: 'user@email.com',
      nameFirst: 'John',
      nameLast: 'Smith',
      password,
    },
  ];

  await Promise.all(
    users.map((user) => prisma.user.upsert({
      create: user,
      update: {},
      where: {
        email: user.email,
      },
    })),
  );

  await prisma.user.addUserRoleForUniqueUser({
    roleKey: RoleKey.Admin,
    where: {
      email: 'admin@email.com',
    },
  });

  const user = await prisma.user.findFirstOrThrow();
  const refreshToken = await prisma.refreshToken.create({
    data: {
      value: 'not a valid token',
    },
  });
  await prisma.accessToken.create({
    data: {
      refreshTokenId: refreshToken.id,
      userId: user.id,
      value: 'not a valid token',
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error); // eslint-disable-line no-console
    await prisma.$disconnect();
    process.exit(1);
  });
