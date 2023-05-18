import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export default function Page() {
  return (
    <div>
      <div
        className='hero min-h-screen bg-base-200'
      >
        <div
          className='hero-content text-center'
        >
          <div
            className='max-w-md'
          >
            <h1
              className='text-5xl font-bold'
            >
              { 'Home' }
            </h1>
            <p
              className='py-6'
            >
              { 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' }
            </p>
            <Link
              href='/about'
              legacyBehavior
              passHref
            >
              <a
                className='btn btn-primary'
                href='/about'
                type='button'
              >
                { 'About' }
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
