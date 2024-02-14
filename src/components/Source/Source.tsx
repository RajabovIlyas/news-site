'use client';

import Article from '@/components/Article/Article';
import { FC } from 'react';
import { SourceModel } from '@/models/source.model';

type SourceProps = Omit<SourceModel, 'id'>;

const Source: FC<SourceProps> = ({
  url,
  name,
  description,
  category,
  country,
  language,
}) => {
  return (
    <div className='mt-3 p-2'>
      <a href={url} target='_blank'>
        <div className='flex flex-col justify-between'>
          <div>
            <span className='article-source'> {category} </span>
            <h2 className='article-title md:h-auto'> {name} </h2>
            <h4 className='article-description md:h-auto'>{description}</h4>
          </div>
          <div className='mt-3 flex gap-2'>
            <span className='text-gray-400'>
              {language} • {country}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Source;
