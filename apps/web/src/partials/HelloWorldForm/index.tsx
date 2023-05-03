'use client';

import { useEffect, useState } from 'react';
import { Button } from 'ui';
import logger from 'logger';
import { queryHello, useLazyQuery } from 'graphql-client';

export default function Page() {
  const [name, setName] = useState<string>('');
  const [hello, setHello] = useState<string | null>(null);
  const [error, setError] = useState<string | undefined>();
  const [getQueryHello] = useLazyQuery(queryHello);

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

      setHello(result.data.hello);
    } catch (err) {
      logger(err);
      setError('Unable to fetch response');
    }
  };

  const onReset = () => {
    setName('');
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
      >
        <label
          htmlFor='name'
        >
          Name
          <input
            id='name'
            name='name'
            onChange={onChange}
            type='text'
            value={name}
          />
        </label>
        <Button
          type='submit'
        >
          Submit
        </Button>
      </form>
      { error && (
        <div>
          <h3>Error</h3>
          <p>{ error }</p>
        </div>
      ) }
      { hello && (
        <div>
          <h3>Greeting</h3>
          <p>{ hello }</p>
          <Button
            onClick={onReset}
          >
            Reset
          </Button>
        </div>
      ) }
    </div>
  );
}
