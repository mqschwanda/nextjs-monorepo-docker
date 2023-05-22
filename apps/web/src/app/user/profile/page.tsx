export const metadata = {
  title: 'User Profile',
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
              { 'User Profile' }
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
