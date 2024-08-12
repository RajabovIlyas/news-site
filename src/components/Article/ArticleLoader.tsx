'use client';
import { FC } from 'react';
import Image from 'next/image';
import { dateFormat } from '@/helpers/dateFormat.helper';

const ArticleLoader: FC = () => (
  <div className='mt-4 md:p-2 animate-pulse'>
    <div className='justify-center gap-5 md:flex'>
      <div>
        <div className='article-image-box bg-loader'>
          <h2 className='article-image-box-source'>Loading...</h2>
        </div>
      </div>

      <div className='mt-2 flex flex-grow flex-col justify-between md:mt-0'>
        <div className="flex flex-col gap-3">
          <div className='bg-loader w-2/6 h-4 bg-blue-300 dark:bg-blue-900'/>
          <div className='bg-loader w-full h-12 bg-gray-300  dark:bg-zinc-800'/>
          <div className='bg-loader w-5/6 h-16 bg-gray-200 '/>
        </div>
        <div className='bg-loader w-1/2 h-6'/>


      </div>
    </div>
  </div>
);

export default ArticleLoader;
