import {
  PrismaClient, RoleKey, Prisma, User,
} from '@prisma/client';
import bcrypt from 'bcrypt';

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

          return prisma.userRole.upsert({
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
        async createWithPassword({
          email,
          nameFirst,
          nameLast,
          password,
        }: Omit<User, 'id' | 'createdAt'>) {
          const hashedPassword = await bcrypt.hash(password, 10);

          return prisma.user.create({
            data: {
              email,
              nameFirst,
              nameLast,
              password: hashedPassword,
            },
          });
        },
        async isPasswordValid({
          email,
          password,
        }: Pick<User, 'email' | 'password'>) {
          const user = await prisma.user.findUniqueOrThrow({
            where: {
              email,
            },
          });

          const isPasswordValid = await bcrypt.compare(password, user.password);

          return isPasswordValid;
        },
      },
    },
    name: '@mqs/prisma',
  });

export { prisma };
export default prisma;
