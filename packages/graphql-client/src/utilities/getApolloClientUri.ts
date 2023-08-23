export default function getApolloClientUri() {
  const url = new URL('/graphql/v1', 'http://localhost:3001');

  const APOLLO_CLIENT_HOST = process.env.APOLLO_CLIENT_HOST; // eslint-disable-line prefer-destructuring

  if (!APOLLO_CLIENT_HOST) {
    throw new Error('no APOLLO_CLIENT_HOST environment variable');
  }

  url.host = APOLLO_CLIENT_HOST;

  return url.toString();
}
