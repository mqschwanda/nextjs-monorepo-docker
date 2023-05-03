'use client';

import { useEffect, useState } from 'react';
import { Button } from 'ui';
import logger from 'logger';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3001';

export default function Page() {
  const [name, setName] = useState<string>('');
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setResponse(null);
    setError(undefined);
  }, [name]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await fetch(`${API_HOST}/message/${name}`);
      const data = await result.json();
      setResponse(data);
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
      { response && (
        <div>
          <h3>Greeting</h3>
          <p>{ response.message }</p>
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
