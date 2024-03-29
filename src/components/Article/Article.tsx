'use client';

import { ArticleModel } from '@/models/article.model';
import { FC } from 'react';
import Image from 'next/image';
import { dateFormat } from '@/helpers/dateFormat.helper';

const Article: FC<ArticleModel> = ({
  title,
  description,
  author,
  urlToImage,
  url,
  publishedAt,
  source,
}) => (
  <div className='mt-4 md:p-2'>
    <a href={url} target='_blank'>
      <div className='justify-center gap-5 md:flex'>
        <div>
          {urlToImage ? (
            <Image
              src={urlToImage}
              alt={title}
              width={384}
              height={240}
              className='article-img'
              quality={50}
            />
          ) : (
            <div className='article-image-box'>
              <h2 className='article-image-box-source'>{source.name}</h2>
            </div>
          )}
        </div>

        <div className='mt-2 flex flex-grow flex-col justify-between md:mt-0'>
          <div>
            <span className='article-source'> {source.name} </span>
            <h2 className='article-title'> {title} </h2>
            <h4 className='article-description'>{description}</h4>
          </div>
          <div className='mt-3 flex gap-2'>
            {author && (
              <>
                <span className='text-gray-400'> {author} </span>{' '}
                <span className='text-gray-400'>• </span>
              </>
            )}
            <time className='text-gray-400' dateTime={publishedAt}>
              {dateFormat(publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default Article;
