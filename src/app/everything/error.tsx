'use client';
import SearchForm from '@/components/SearchForm/SearchForm';
import { FC } from 'react';
import Notice from '@/components/Notice/Notice';

interface ErrorProps {
  searchParams: {
    q?: string;
  };
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ searchParams }) => {
  return (
    <div className='mx-auto max-w-screen-xl flex-grow'>
      <main className='px-5'>
        <div>
          <SearchForm {...searchParams} />
        </div>
      </main>
      <Notice title={400} description={'Bad request.'} />
    </div>
  );
};
