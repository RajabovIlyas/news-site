import GithubMark from '@/components/Icons/GithubMark';

export default async function Home() {
  return (
    <main className='mx-auto flex min-h-[calc(100vh-16rem)] max-w-screen-xl flex-grow flex-col items-center justify-center'>
      <h1 className='main-title'>
        Breaking
        <br /> news
      </h1>
      <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
        <a href='https://github.com/RajabovIlyas/news-site' target='_blank'>
          <button className='main-button'>
            <GithubMark />
            GitHub repo
          </button>
        </a>
      </div>
    </main>
  );
}
