import Link from 'next/link';

export const metadata = {
  title: 'Sign In',
};

export default function Page() {
  return (
    <div
      className='hero min-h-screen bg-base-200'
    >
      <div
        className='hero-content flex-col lg:flex-row-reverse'
      >
        <div
          className='text-center lg:text-left'
        >
          <h1
            className='text-5xl font-bold'
          >
            { 'Sign In' }
          </h1>
          <p
            className='py-6'
          >
            { 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.' }
          </p>
        </div>
        <div
          className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'
        >
          <div
            className='card-body'
          >
            <form>
              <div
                className='form-control'
              >
                <label
                  className='label'
                  htmlFor='email'
                >
                  <span
                    className='label-text'
                  >
                    { 'Email' }
                  </span>
                </label>
                <input
                  className='input input-bordered'
                  id='email'
                  placeholder='email'
                  type='text'
                />
              </div>
              <div
                className='form-control'
              >
                <label
                  className='label'
                  htmlFor='password'
                >
                  <span
                    className='label-text'
                  >
                    { 'Password' }
                  </span>
                </label>
                <input
                  className='input input-bordered'
                  id='password'
                  placeholder='password'
                  type='text'
                />
                <label
                  className='label'
                  htmlFor='forgot-password'
                >
                  <a
                    className='label-text-alt link link-hover'
                    href='/auth/forgot-password'
                    id='forgot-password'
                  >
                    { 'Forgot password?' }
                  </a>
                </label>
              </div>
              <div
                className='form-control mt-6'
              >
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  { 'Sign In' }
                </button>
              </div>
              <label
                className='label'
                htmlFor='dont-have-an-account'
              >
                <Link
                  href='/auth/sign-up'
                  legacyBehavior
                  passHref
                >
                  <a
                    className='label-text-alt link link-hover'
                    href='/auth/sign-up'
                    id='dont-have-an-account'
                  >
                    { 'Don\'t have an account? Sign Up.' }
                  </a>
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
