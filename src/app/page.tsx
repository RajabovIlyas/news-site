import GithubMark from '@/components/Icons/GithubMark'

export default async function Home() {
    return (
        <main
            className='flex-grow max-w-screen-xl mx-auto min-h-[calc(100vh-16rem)] flex flex-col justify-center items-center'>
            <h1 className='main-title'>Breaking<br /> news</h1>
            <div className='mt-6 flex flex-col sm:flex-row gap-3'>
                <a href="https://github.com/RajabovIlyas/news-site" target='_blank'>
                    <button
                        className='rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black  flex gap-1 items-center justify-center'>
                        <GithubMark/>
                        GitHub repo
                    </button>
                </a>
            </div>
        </main>
    )
}
