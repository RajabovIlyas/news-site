'use client';
import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';

const menuItems = [
  {
    title: 'Everything',
    path: '/everything',
  },
  { title: 'Top headlines', path: '/top-headlines' },
  { title: 'Sources', path: '/sources' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='mx-auto max-w-screen-xl'>
      <header>
        <div className='flex-col items-center justify-between p-5 lg:flex lg:flex-row'>
          <div className='flex items-center justify-between lg:block'>
            <Link href='/' className='header-link-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
                />
              </svg>
              <span>News</span>
            </Link>
            <div className='flex items-center justify-center gap-2 lg:hidden'>
              <ThemeSwitch />
              <button
                className='block'
                hidden={mobileMenuOpen}
                onClick={() =>
                  setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen)
                }
              >
                {mobileMenuOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='header-link h-7 w-7'
                  >
                    <path d='M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z' />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='header-link h-7 w-7'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className='absolute left-0 right-0 z-10 w-auto border-b bg-white px-5 py-2 dark:bg-gray-950 lg:hidden lg:border-b-0'
            hidden={!mobileMenuOpen}
          >
            <div className='flex flex-col'>
              <nav>
                <ul className='gap-4 lg:flex'>
                  {menuItems.map(({ title, path }) => (
                    <li
                      key={title}
                      className='header-link items-center py-2 lg:px-3'
                    >
                      <Link href={path}>{title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center justify-center gap-4'>
              <button className='w-full rounded  border-2  border-transparent bg-gray-100 px-4 py-2 text-center ring-gray-200 ring-offset-2 transition hover:bg-gray-200 focus-visible:ring-2 dark:border-zinc-400 dark:bg-zinc-400 dark:text-zinc-800 dark:hover:border-zinc-600 dark:hover:bg-zinc-200'>
                Log in
              </button>
              <button className='w-full  rounded  border-2 border-transparent bg-black px-4 py-2 text-center text-white ring-gray-200 ring-offset-2 transition hover:bg-gray-800 focus-visible:ring-2 dark:border-zinc-400 dark:bg-gray-950  dark:text-zinc-400 dark:hover:bg-zinc-950'>
                Sign up
              </button>
            </div>
          </div>

          <div className='order-1 hidden w-full items-center justify-between lg:order-none lg:flex lg:w-auto'>
            <nav>
              <ul className='hidden gap-4 lg:flex'>
                {menuItems.map(({ title, path }) => (
                  <li
                    key={title}
                    className='header-link items-center py-2 lg:px-3'
                  >
                    <Link href={path}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='hidden items-center gap-4 lg:flex'>
            <ThemeSwitch />
            <Link href='#' className='header-link'>
              Log in
            </Link>
            <Link href='/'>
              <button className='header-button'>Sign up</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
