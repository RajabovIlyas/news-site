import { EverythingQuery } from '@/models/everything-query.model'
import { apiKey, apiUrl } from '@/config'
import { getRequestParams } from '@/helper/request-params.helper'
import { TopHeadlinesQueryModel } from '@/models/top-headlines-query.model'

const API_KEY = `apiKey=${apiKey}`

export const getEverything = (params: EverythingQuery = {}) =>
    `${apiUrl}/v2/everything?${API_KEY}${getRequestParams(params)}`


export const getTopHeadlines = (params: TopHeadlinesQueryModel = {}) => `${apiUrl}/v2/top-headlines?${API_KEY}${getRequestParams(params)}`


export const sources = `${apiUrl}/v2/top-headlines/sources?${API_KEY}`
