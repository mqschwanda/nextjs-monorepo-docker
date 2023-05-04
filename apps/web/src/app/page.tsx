import HelloWorldForm from 'partials/HelloWorldForm';
import { Typography } from 'ui';

export const metadata = {
  title: 'My Page Title',
};

export default function Page() {
  return (
    <div>
      <Typography
        variant='h4'
      >
        Web
      </Typography>
      <HelloWorldForm />
    </div>
  );
}
