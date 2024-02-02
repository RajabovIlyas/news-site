'use client'
import { FC } from 'react'

interface SearchInputProps {
    defaultValue?: string,
    name?: string;
}

const SearchInput: FC<SearchInputProps> = (props) => (

    <div className='relative w-full'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg className='w-4 h-4 text-gray-600 stroke-gray-600' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
            </svg>
        </div>
        <input {...props} type='search' id='default-search'
               className='search-input rounded-r-md'
               placeholder='Enter key words or phrases to search in the title and body of the article.'
               required />
        <button type='submit'
                className='absolute end-[0.5rem] bottom-[0.5rem] font-medium text-sm
                            rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent'>Search
        </button>
    </div>
)

export default SearchInput
