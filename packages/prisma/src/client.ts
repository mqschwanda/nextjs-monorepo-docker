import { PrismaClient, RoleKey, Prisma } from '@prisma/client';

export * from '@prisma/client';

const prisma = new PrismaClient()
  .$extends({
    model: {
      user: {
        async addUserRoleForUniqueUser({
          roleKey,
          where,
        }: {
          where: Prisma.Exact<Prisma.UserWhereUniqueInput, Prisma.UserWhereUniqueInput>,
          roleKey: RoleKey
        }) {
          const [
            adminUser,
            adminRole,
          ] = await Promise.all([
            prisma.user.findUniqueOrThrow({
              where,
            }),
            prisma.role.findUniqueOrThrow({
              where: {
                key: roleKey,
              },
            }),
          ]);

          await prisma.userRole.upsert({
            create: {
              roleId: adminRole.id,
              userId: adminUser.id,
            },
            update: {},
            where: {
              userId_roleId: {
                roleId: adminRole.id,
                userId: adminUser.id,
              },
            },
          });
        },
      },
    },
    name: '@mqs/prisma',
  });

export { prisma };
export default prisma;
