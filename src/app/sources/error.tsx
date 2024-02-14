'use client';

export default function Error() {
  return (
    <div className='mx-auto max-w-screen-xl flex-grow'>
      <div className='flex min-h-[calc(100vh-16rem)] items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold lg:text-5xl lg:tracking-tight'>
            400
          </h1>
          <p className='mt-4 text-lg text-slate-600'>Bad request.</p>
        </div>
      </div>
    </div>
  );
}
