'use server'
import { fetcher } from '@/services/fetcher.request';
import { ArticleReq } from '@/models/article.model';
import { getEverything } from '@/constants/endpoints.constant';
import { EverythingQuery } from '@/models/everything-query.model';



export const fetchEverything = async (searchParams: EverythingQuery) => {
  return searchParams.q
    ? await fetcher<ArticleReq>(getEverything(searchParams))
    : { articles: [], status: "ok", totalResults: 0 }
}

