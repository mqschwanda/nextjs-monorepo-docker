import { RoleKey } from '@mqs/prisma/client';
import { NextLinkWrapper } from '@mqs/react-client-components';
import {
  Card, CardBody, CardTitle, Container,
} from '@mqs/react-server-components';
import authenticate from 'utilities/authenticate';

export const metadata = {
  title: 'Admin',
};

export default async function Page() {
  await authenticate({
    roles: [
      RoleKey.Admin,
    ],
  });

  return (
    <Container
      center
      cx={[
        'py-4',
      ]}
    >
      <h1
        className='text-5xl font-bold'
        id='admin-title'
      >
        { 'Admin' }
      </h1>

      <Card>
        <CardBody>
          <CardTitle>
            { 'Title' }
          </CardTitle>
          <ul>
            <li>
              <NextLinkWrapper
                href='/admin/users'
              >
                <a
                  className='link link-primary'
                  href='/admin/users'
                >
                  { 'users' }
                </a>
              </NextLinkWrapper>
            </li>
            <li>
              <NextLinkWrapper
                href='/admin/jobs'
              >
                <a
                  className='link link-primary'
                  href='/admin/jobs'
                >
                  { 'jobs' }
                </a>
              </NextLinkWrapper>
            </li>
            <li>
              <NextLinkWrapper
                href='/admin/logs'
              >
                <a
                  className='link link-primary'
                  href='/admin/logs'
                >
                  { 'logs' }
                </a>
              </NextLinkWrapper>
            </li>
          </ul>
        </CardBody>
      </Card>
    </Container>
  );
}
