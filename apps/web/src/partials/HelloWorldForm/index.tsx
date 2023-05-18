'use client';

import { useEffect, useState } from 'react';
import {
  Stack,
  TextField,
  Typography,
} from '@mqs/react-client-components';
import {
  Button,
} from '@mqs/react-server-components';
import logger from '@mqs/logger';
import { useCountdownSubscription, useHelloLazyQuery } from '@mqs/graphql-client';

export default function Page() {
  const [name, setName] = useState<string>('');
  const [hello, setHello] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [getQueryHello] = useHelloLazyQuery();
  const { data } = useCountdownSubscription({
    variables: {
      from: 10,
    },
  });

  useEffect(() => {
    setHello(null);
    setError(undefined);
  }, [name]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await getQueryHello({
        variables: {
          name,
        },
      });

      if (result.data) {
        setHello(result.data.hello);
      } else {
        setError('Unable to fetch response');
      }
    } catch (err) {
      logger(err);
      setError('Unable to fetch response');
    }
  };

  const onReset = () => {
    setName('');
  };

  return (
    <Stack
      spacing={1}
    >
      { data?.countdown !== undefined && (
        <div>
          <Typography>
            { `Countdown: ${data.countdown}` }
          </Typography>
        </div>
      ) }
      <form
        onSubmit={onSubmit}
      >
        <TextField
          id='name'
          label='Name'
          name='name'
          onChange={onChange}
          size='small'
          type='text'
          value={name}
        />
        <Button
          type='submit'
        >
          Submit
        </Button>
      </form>
      { error && (
        <Stack>
          <Typography
            variant='h5'
          >
            Error
          </Typography>
          <Typography
            color='error'
          >
            { error }
          </Typography>
        </Stack>
      ) }
      { hello && (
        <Stack>
          <Typography
            variant='h5'
          >
            Greeting
          </Typography>
          <Typography>
            { hello }
          </Typography>
          <div>
            <Button
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </Stack>
      ) }
    </Stack>
  );
}
