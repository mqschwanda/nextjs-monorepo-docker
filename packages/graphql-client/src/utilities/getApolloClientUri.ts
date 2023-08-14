export default function getApolloClientUri() {
  const url = new URL('/graphql/v1', 'http://localhost:3001');

  if (process.env.NODE_ENV === 'production') {
    // TODO: handle production apollo client uri
    throw new Error('no production uri');
  }

  return url.toString();
}
