import * as zod from 'zod';
import { buildRequiredErrorMessage } from '@mqs/errors/messages';

export const mqs = {
  email: ({
    key,
  }: {
    key: string,
  }) => zod
    .string(
      {
        required_error: buildRequiredErrorMessage(key),
      },
    )
    .min(
      1,
      {
        message: buildRequiredErrorMessage(key),
      },
    )
    .email(),

  name: ({
    key,
  }: {
    key: string,
  }) => zod
    .string(
      {
        required_error: buildRequiredErrorMessage(key),
      },
    )
    .min(
      1,
      {
        message: buildRequiredErrorMessage(key),
      },
    ),

  password: ({
    key,
  }: {
    key: string,
  }) => zod
    .string(
      {
        required_error: buildRequiredErrorMessage(key),
      },
    )
    .min(
      1,
      {
        message: buildRequiredErrorMessage(key),
      },
    ),
};

export * from 'zod';
