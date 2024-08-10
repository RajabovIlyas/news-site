import { EverythingQuery } from '@/models/everything-query.model';
import { apiKey, apiUrl } from '@/config';
import { getRequestParams } from '@/helpers/request-params.helper';
import { TopHeadlinesQueryModel } from '@/models/top-headlines-query.model';
import { DEFAULT_PAGE, PAGE_SIZE } from '@/constants/page.constant';

const API_KEY = `apiKey=${apiKey}`;

export const getEverything = (params: EverythingQuery = {}) =>
  getRequestParams({ pageSize: PAGE_SIZE, page: DEFAULT_PAGE ,...params }, `${apiUrl}/v2/everything?${API_KEY}`);

export const getEverythingFromServer = (params: EverythingQuery = {}) =>
  getRequestParams({ pageSize: PAGE_SIZE, page: DEFAULT_PAGE ,...params }, '/api/everything?');

export const getTopHeadlines = (params: TopHeadlinesQueryModel = {}) =>
  getRequestParams(params, `${apiUrl}/v2/top-headlines?${API_KEY}`);

export const sources = `${apiUrl}/v2/top-headlines/sources?${API_KEY}`;
