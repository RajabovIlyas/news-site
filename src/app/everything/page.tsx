import { Languages } from '@/enums/languages.enum';
import SearchForm from '@/components/SearchForm/SearchForm';
import Article from '@/components/Article/Article';
import { fetcher } from '@/services/fetcher.request';
import { ArticleReq } from '@/models/article.model';
import { getEverything } from '@/constants/endpoints.constant';
import Notice from '@/components/Notice/Notice';

interface HomeProps {
  searchParams: {
    q?: string;
    language?: Languages;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const { articles } = searchParams.q
    ? await fetcher<ArticleReq>(getEverything(searchParams))
    : { articles: [] };

  return (
    <div className='mx-auto max-w-screen-xl flex-grow'>
      <main className='px-5'>
        <div>
          <SearchForm {...searchParams} />
        </div>
        {articles.map((article) => (
          <Article
            key={`${article.title}-${article.description}`}
            {...article}
          />
        ))}
        {articles.length === 0 && (
          <Notice title={404} description={'Data not found.'} />
        )}
      </main>
    </div>
  );
}
