import { apiKey, apiUrl } from '@/config'
import { ArticleReq } from '@/models/article.model'
import { EverythingQuery } from '@/models/everything-query.model'




export const getEverything = async ({ page=1, pageSize=10, q='nothing', language }: EverythingQuery): Promise<ArticleReq> => {
    const data = await fetch(`${apiUrl}/v2/everything?q=${q}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`)
    return data.json()
}
