import { Languages } from '@/enums/languages.enum';
import SearchForm from '@/components/SearchForm/SearchForm';
import { fetchEverything } from '@/services/everything.server';
import ArticleContainer from '@/components/Article/ArticleContainer';
import { EverythingQuery } from '@/models/everything-query.model';

interface HomeProps {
  searchParams: EverythingQuery;
}

export default async function Home({ searchParams }: HomeProps) {
  const articleData = await fetchEverything(searchParams);


  return (
    <div className='mx-auto max-w-screen-xl flex-grow'>
      <main className='px-5'>
        <SearchForm {...searchParams} />
        <ArticleContainer {...articleData} searchParams={searchParams} />
      </main>
    </div>
  );
}
