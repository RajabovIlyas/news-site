'use client'
import { useEffect, useState } from "react";
import { ArticleReq } from '@/models/article.model';
import { fetchEverythingFromServer } from '@/services/everything.clent';
import { EverythingQuery } from '@/models/everything-query.model';

interface ArticleContainerProps extends ArticleReq{
  searchParams: EverythingQuery;
}
export const useArticleContainer = ({articles: articlesFromServer, searchParams, totalResults}: ArticleContainerProps) => {
  const [articles, setArticles] = useState(articlesFromServer);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(articles.length < totalResults);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const onScroll =  () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasMore &&
        !loading
      ) {
        getNewArticles();
      }
    };

    const getNewArticles = async () => {
      try {
        setLoading(true);
        const newData = await fetchEverythingFromServer({...searchParams, page: page+1})
        setHasMore(articles.length+newData.articles.length < totalResults);
        setArticles([...articles, ...newData.articles]);

        setPage(page + 1);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [loading, hasMore]);

  return { ...searchParams, articles, loading };
};
