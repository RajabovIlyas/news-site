import { apiKey, apiUrl } from '@/config'
import { ArticleReq } from '@/models/article.model'
import { EverythingQuery } from '@/models/everything-query.model'
import { fetcher } from '@/requests/fetcher.request'


export const getEverything = async ({
                                        page = 1,
                                        pageSize = 10,
                                        q = '',
                                        language,
                                    }: EverythingQuery): Promise<ArticleReq> => {

    return await fetcher<ArticleReq>(`${apiUrl}/v2/everything?q=${q}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}${language && `&language=${language}`}`)

}
