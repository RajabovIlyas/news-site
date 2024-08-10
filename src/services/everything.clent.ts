'use client'
import { EverythingQuery } from '@/models/everything-query.model';
import { fetcher } from '@/services/fetcher.request';
import { ArticleReq } from '@/models/article.model';
import { getEverythingFromServer } from '@/constants/endpoints.constant';

export const fetchEverythingFromServer = async (searchParams: EverythingQuery) => {
  return fetcher<ArticleReq>(getEverythingFromServer(searchParams))
}
