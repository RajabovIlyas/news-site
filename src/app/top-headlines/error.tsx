'use client'
import SearchForm from '@/components/SearchForm/SearchForm'

interface HomeProps {
    searchParams: {
        q?: string;
    }
    error: Error & { digest?: string }
    reset: () => void
}

export default function Error({ searchParams, }: HomeProps) {
    return (
        <div className='flex-grow max-w-screen-xl mx-auto'>
            <main className='px-5'>
                <div>
                    <SearchForm {...searchParams} />
                </div>
            </main>
            <div className='min-h-[calc(100vh-16rem)] flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>400</h1>
                    <p className='text-lg mt-4 text-slate-600'>Bad request.</p>
                </div>
            </div>
        </div>
    )
}
