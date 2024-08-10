'use client'
import { FC, useState } from 'react';
import { ArticleReq } from '@/models/article.model';
import Article from '@/components/Article/Article';
import Notice from '@/components/Notice/Notice';
import { EverythingQuery } from '@/models/everything-query.model';
import { useArticleContainer } from '@/components/Article/article-container.hook';

interface ArticleContainerProps extends ArticleReq{
  searchParams: EverythingQuery;
}
const ArticleContainer:FC<ArticleContainerProps> = (props) => {

  const {articles, loading, q} = useArticleContainer(props);


  return(
    <>
      {articles.map((article) => (
        <Article
          key={`${article.title}-${article.description}`}
          {...article}
        />
      ))}
      {articles.length === 0 && q && (
        <Notice title={404} description={'Data not found.'} />
      )}
    </>
  )
}

export default ArticleContainer
