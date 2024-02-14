'use client';
import { FC } from 'react';

interface SearchInputProps {
  defaultValue?: string;
  name?: string;
}

const SearchInput: FC<SearchInputProps> = (props) => (
  <div className='relative w-full'>
    <div className='pointer-events-none absolute end-3 top-5 flex items-center md:start-0 md:ps-3'>
      <svg
        className='h-4 w-4 stroke-gray-600 text-gray-600 dark:stroke-zinc-500 dark:text-zinc-500'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 20 20'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
        />
      </svg>
    </div>
    <input
      {...props}
      type='search'
      id='default-search'
      className='search-input pr-8 md:rounded-l-none md:pr-24 md:ps-10'
      placeholder='Enter key words or phrases to search in the title and body of the article.'
      required
    />
    <button
      type='submit'
      className='rounded border-2 border-transparent bg-black px-4
                            py-2 text-center text-sm font-medium text-white
                            ring-gray-200 ring-offset-2 transition hover:bg-gray-800 focus-visible:ring-2 dark:bg-zinc-800  dark:hover:bg-zinc-600 md:absolute
                            md:end-[0.5rem] md:top-[0.5rem]'
    >
      Search
    </button>
  </div>
);

export default SearchInput;
