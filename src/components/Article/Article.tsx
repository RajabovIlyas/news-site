'use client'

import { ArticleModel } from '@/models/article.model'
import { FC } from 'react'
import Image from 'next/image'
import { dateFormat } from '@/helper/dateFormat.helper'

const Article: FC<ArticleModel> = ({ title, description, author, urlToImage, url, publishedAt, source }) => (
    <div className='mt-3 p-2'>
        <a href={url} target='_blank'>
            <div className='flex gap-5 justify-center'>
                <div>
                    {urlToImage ?
                        <Image src={urlToImage} alt={title} width={384} height={240}
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

                <div className='flex-grow flex flex-col justify-between'>
                    <div>
                    <span
                        className='text-blue-400 uppercase tracking-wider text-sm font-medium'> {source.name} </span>
                        <h2 className='text-3xl font-semibold leading-snug tracking-tight '> {title} </h2>
                        <h4 className='text-lg leading-snug tracking-tight mt-1 '>{description}</h4>
                    </div>
                    <div className='flex gap-2 mt-3'>{author && <><span
                        className='text-gray-400'> {author} </span> <span
                        className='text-gray-400'>• </span></>}
                        <time className='text-gray-400'
                              dateTime={publishedAt}>{dateFormat(publishedAt)}</time>
                    </div>
                </div>
            </div>
        </a>
    </div>
)


export default Article
