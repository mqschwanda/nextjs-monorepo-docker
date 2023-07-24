import { Request, Response } from 'express';
import prisma from '@mqs/prisma/client';

export default async function healthz( // cspell:disable-line
  _req: Request,
  res: Response,
) {
  try {
    await prisma.$connect();

    await prisma.$queryRaw`SELECT 1`;

    prisma.$disconnect();

    res.json({ ok: true });
  } catch (error) {
    res.json({ ok: false });
  }
}
