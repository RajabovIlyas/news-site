'use client'
import Link from 'next/link'
import { useState } from 'react'

const menuItems = [
    {
        title: 'Everything',
        path: '/everything',
    },
    { title: 'Top headlines', path: '/top-headlines' },
    { title: 'Sources', path: '/sources' },
]

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <div className='max-w-screen-xl mx-auto'>
            <header>
                <div className='lg:flex lg:flex-row flex-col justify-between items-center p-5'>
                    <div className='flex lg:block justify-between items-center'>
                        <Link href='/' className='flex gap-1 justify-center items-center hover:text-gray-900'>
                            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5}
                                 stroke='currentColor' className='w-6 h-6'>
                                <path strokeLinecap='round' strokeLinejoin='round'
                                      d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z' />
                            </svg>
                            <span className='py-2 items-center text-gray-600'>News</span>
                        </Link>
                        <button className='block lg:hidden' hidden={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)}>
                            {mobileMenuOpen ?
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor'
                                     className='w-4 h-4'>
                                    <path
                                        d='M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z' />
                                </svg>
                                :
                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'
                                     strokeWidth={1.5}
                                     stroke='currentColor' className='w-6 h-6'>
                                    <path strokeLinecap='round' strokeLinejoin='round'
                                          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                </svg>
                            }
                        </button>

                    </div>

                    <div className='lg:hidden border-b lg:border-b-0 py-2' hidden={!mobileMenuOpen}>
                        <div className='flex flex-col'>
                            <nav>
                                <ul className='lg:flex gap-4'>
                                    {menuItems.map(({ title, path }) => (
                                        <li key={title}
                                            className='lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900'>
                                            <Link href={path}>{title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <button
                                className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 border-2 border-transparent'>
                                Log in
                            </button>
                            <button
                                className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 w-full px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent'>Sign
                                up
                            </button>
                        </div>
                    </div>

                    <div className='items-center justify-between hidden w-full lg:flex lg:w-auto order-1 lg:order-none'>
                        <nav>
                            <ul className='hidden lg:flex gap-4'>
                                {menuItems.map(({ title, path }) => (
                                    <li key={title}
                                        className='lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900'>
                                        <Link href={path}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className='hidden lg:flex items-center gap-4'>
                        <Link href='#'>Log in</Link>
                        <Link href='/'>
                            <button
                                className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-4 py-2 bg-black text-white hover:bg-gray-800  border-2 border-transparent'>Sign
                                up
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}


export default Header
