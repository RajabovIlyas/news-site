'use client'
import { useCallback, useEffect, useState } from "react";
import { ArticleReq } from '@/models/article.model';
import { fetchEverythingFromServer } from '@/services/everything.clent';
import { EverythingQuery } from '@/models/everything-query.model';

interface ArticleContainerProps extends ArticleReq{
  searchParams: EverythingQuery;
}
export const useArticleContainer = ({articles: articlesFromServer, searchParams, totalResults}: ArticleContainerProps) => {
  const [articles, setArticles] = useState(articlesFromServer);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getNewArticles = async () => {
    try {

      if (articles.length >= totalResults || loading) {
        return;
      }
      setLoading(true);
      const newData = await fetchEverythingFromServer({...searchParams, page: page+1})
      setArticles([...articles, ...newData.articles]);
      setPage(page + 1);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const onScroll = useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      await getNewArticles();
    }
  }, [loading]); // Dependencies

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { articles, loading, q: searchParams.q };
};
