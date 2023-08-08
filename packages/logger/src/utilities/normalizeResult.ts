import { LoggerResult } from 'types';

export default function normalizeResult(log: any): LoggerResult | undefined {
  if (!log) {
    return undefined;
  }

  const {
    message,
  } = log;

  if (!message) {
    throw new Error('log missing message property');
  }

  const id = log.id
    ? Number(log.id)
    : undefined;

  const createdAt = log.createdAt
    ? new Date(log.createdAt)
    : undefined;

  const payload = log.payload
    ? JSON.parse(JSON.stringify(log.payload))
    : undefined;

  return {
    createdAt,
    id,
    message: String(message),
    payload,
  };
}
