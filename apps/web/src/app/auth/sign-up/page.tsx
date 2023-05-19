import signUp from 'actions/sign-up';
import Link from 'next/link';

export const metadata = {
  title: 'Sign Up',
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
            { 'Sign Up' }
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
            <form
              action={signUp}
            >
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
                  name='email'
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
                  name='password'
                  placeholder='password'
                  type='text'
                />
                <label
                  className='label'
                  htmlFor='confirm-password'
                >
                  <span
                    className='label-text'
                  >
                    { 'Confirm Password' }
                  </span>
                </label>
                <input
                  className='input input-bordered'
                  id='confirm-password'
                  name='confirm-password'
                  placeholder='confirm password'
                  type='text'
                />
              </div>
              <div
                className='form-control mt-6'
              >
                <button
                  className='btn btn-primary'
                  type='submit'
                >
                  { 'Sign Up' }
                </button>
              </div>
              <label
                className='label'
                htmlFor='already-have-account'
              >
                <Link
                  href='/auth/sign-in'
                  legacyBehavior
                  passHref
                >
                  <a
                    className='label-text-alt link link-hover'
                    href='/auth/sign-in'
                    id='already-have-account'
                  >
                    { 'Already have an account? Sign In.' }
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
