import { apiKey, apiUrl } from '@/config'
import { ArticleReq } from '@/models/article.model'
import Image from 'next/image'
import Input from '@/components/input/Input'
import { dateFormat } from '@/helper/dateFormat.helper'

const getData = async (): Promise<ArticleReq> => {
    const data = await fetch(`${apiUrl}/v2/everything?q=javascript&apiKey=${apiKey}&pageSize=10&page=1`)

    return data.json()
}

export default async function Home() {
    const { articles } = await getData()
    return (
        <div className='flex-grow max-w-screen-xl mx-auto'>
            <main className='px-5'>
                {articles.map(({ title, description, author, urlToImage, url, publishedAt, source }) => (
                    <div key={`${title}-${description}`} className='mt-3 p-2'>
                        <a href={url} target='_blank'>
                            <div className='flex gap-5 justify-center'>

                                <div>
                                    {urlToImage ?
                                        <Image src={urlToImage} alt={title} loading='lazy' width={384} height={240}
                                               className='img-title'
                                               quality={50} /> :
                                        <div className='img-title bg-gray-100 flex justify-center items-center'>
                                            <h2
                                            className='text-4xl text-center text-gray-200 font-semibold leading-snug tracking-tight -rotate-[15deg]'>
                                            {source.name}
                                        </h2>
                                        </div>
                                    }
                                </div>

                                <div className='flex-grow flex flex-col justify-center '>
                                    <span
                                        className='text-blue-400 uppercase tracking-wider text-sm font-medium'> {source.name} </span>
                                    <h2 className='text-3xl font-semibold leading-snug tracking-tight mt-1 '> {title} </h2>
                                    <div className='flex gap-2 mt-3'>{author && <><span
                                        className='text-gray-400'> {author} </span> <span
                                        className='text-gray-400'>• </span></>}
                                        <time className='text-gray-400' dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    )
}
