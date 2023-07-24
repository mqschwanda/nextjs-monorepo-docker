import { Request, Response } from 'express';

export default function healthz( // cspell:disable-line
  _req: Request,
  res: Response,
) {
  res.json({ ok: true });
}
