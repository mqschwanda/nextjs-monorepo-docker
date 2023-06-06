import { Container } from '@mqs/react-server-components';

export const metadata = {
  title: 'About',
};

const CODE = `
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}`;

export default function Page() {
  return (
    <Container
      center
      cx={[
        'py-4',
      ]}
    >
      <article
        className='prose'
      >
        <h1
          id='about-title'
        >
          { 'HTML Ipsum Presents' }
        </h1>

        <p>
          <strong>
            {
              // cspell:disable
              'Pellentesque habitant morbi tristique'
              // cspell:enable
            }
          </strong>
          { ' ' }
          {
            // cspell:disable
            'senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.'
            // cspell:enable
          }
          { ' ' }
          <em>
            {
              // cspell:disable
              'Aenean ultricies mi vitae est.'
              // cspell:enable
            }
          </em>
          { ' ' }
          {
            // cspell:disable
            'Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,'
            // cspell:enable
          }
          { ' ' }
          <code>
            {
              // cspell:disable
              'commodo vitae'
              // cspell:enable
            }
          </code>
          {
            // cspell:disable
            ', ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.'
            // cspell:enable
          }
          { ' ' }
          <a
            href='#about-title'
          >
            {
              // cspell:disable
              'Donec non enim'
              // cspell:enable
            }
          </a>
          { ' ' }
          {
            // cspell:disable
            'in turpis pulvinar facilisis. Ut felis.'
            // cspell:enable
          }
        </p>

        <h2>
          { 'Header Level 2' }
        </h2>

        <ol>
          <li>
            {
              // cspell:disable
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
              // cspell:enable
            }
          </li>
          <li>
            {
              // cspell:disable
              'Aliquam tincidunt mauris eu risus.'
              // cspell:enable
            }
          </li>
        </ol>

        <blockquote>
          <p>
            {
              // cspell:disable
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.'
              // cspell:enable
            }
          </p>
        </blockquote>

        <h3>
          { 'Header Level 3' }
        </h3>

        <ul>
          <li>
            {
              // cspell:disable
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
              // cspell:enable
            }
          </li>
          <li>
            {
              // cspell:disable
              'Aliquam tincidunt mauris eu risus.'
              // cspell:enable
            }
          </li>
        </ul>
        <div
          className='mockup-code'
        >
          <pre>
            <code>
              { CODE }
            </code>
          </pre>
        </div>
      </article>
    </Container>
  );
}
