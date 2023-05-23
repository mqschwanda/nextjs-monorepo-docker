import { Container } from '@mqs/react-server-components';

export const metadata = {
  title: 'User Profile',
};

export default function Page() {
  return (
    <Container
      center
      cx={[
        'py-4',
      ]}
    >
      <h1
        className='text-5xl font-bold'
      >
        { 'User Profile' }
      </h1>
    </Container>
  );
}
