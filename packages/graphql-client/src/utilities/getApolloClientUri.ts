export default function getApolloClientUri() {
  // TODO: handle dynamic apollo client uri
  return 'http://localhost:3001/graphql/v1';

  // if (process.env.NODE_ENV === 'production') {
  //   throw new Error('no production uri');
  //   // return '';
  // }

  // if (process.env.NODE_ENV === 'development') {
  //   return 'http://localhost:3001/graphql/v1';
  // }

  // throw new Error('no uri');
}
