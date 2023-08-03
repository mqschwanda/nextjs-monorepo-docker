import bcrypt from 'bcrypt';
import {
  User,
  Role,
  RoleKey,
  prisma,
} from '../client';
import { ADMIN_USER, USER, JOBS } from './constants';

type SeedUser = Omit<User, 'createdAt' | 'id'>;
async function sanitizeUser(user: SeedUser) {
  const password = await bcrypt.hash(user.password, 10);

  return {
    ...user,
    password,
  };
}

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

  const users = await Promise.all([
    sanitizeUser(ADMIN_USER),
    sanitizeUser(USER),
  ]);

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

  await prisma.job.createMany({
    data: JOBS,
  });
  const job = await prisma.job.findFirstOrThrow();

  await prisma.ranJob.create({
    data: {
      finishedAt: new Date(),
      jobId: job.id,
      ranAt: new Date(),
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
