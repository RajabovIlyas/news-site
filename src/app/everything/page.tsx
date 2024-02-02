import { Languages } from '@/enums/languages.enum'
import SearchForm from '@/components/SearchForm/SearchForm'
import Article from '@/components/Article/Article'
import { fetcher } from '@/services/fetcher.request'
import { ArticleReq } from '@/models/article.model'
import { getEverything } from '@/constants/endpoints.constant'

interface HomeProps{
    searchParams: {
        q?: string;
        language?: Languages
    }
}


export default async function Home({ searchParams }: HomeProps) {

    const { articles } = searchParams.q ? await fetcher<ArticleReq>(getEverything(searchParams)): {articles: []}



    return (
        <div className='flex-grow max-w-screen-xl mx-auto'>
            <main className='px-5'>
                <div>
                    <SearchForm {...searchParams}/>
                </div>
                {articles.map((article) => (
                    <Article key={`${article.title}-${article.description}`} {...article}/>
                ))}
            </main>
        </div>
    )
}
