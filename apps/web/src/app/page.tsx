import HelloWorldForm from 'partials/HelloWorldForm';

export const metadata = {
  title: 'My Page Title',
};

export default function Page() {
  return (
    <div>
      <h1>Web</h1>
      <HelloWorldForm />
    </div>
  );
}
