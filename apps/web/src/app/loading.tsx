import { LoadingIndicator } from '@mqs/react-server-components';

export default function Loading() {
  return (
    <div
      className='flex w-full h-full'
    >
      <div
        className='m-auto'
      >
        <LoadingIndicator
          variantColor='primary'
          variantIndicator='spinner'
          variantSize='lg'
        />
      </div>
    </div>
  );
}
