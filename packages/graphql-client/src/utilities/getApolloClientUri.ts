export default function getApolloClientUri() {
  const url = new URL('/graphql/v1', 'http://localhost:3001');

  const host = (
    process.env.APOLLO_CLIENT_HOST
    || process.env.NEXT_PUBLIC_APOLLO_CLIENT_HOST
  );

  if (!host) {
    throw new Error('no APOLLO_CLIENT_HOST or NEXT_PUBLIC_APOLLO_CLIENT_HOST environment variable');
  }

  url.host = host;

  return url.toString();
}
