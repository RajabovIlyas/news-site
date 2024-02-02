import { Countries } from '@/enums/countries.enum'

export interface TopHeadlinesQueryModel{
    pageSize?: number;
    page?: number;
    q?: string;
    country?: Countries;
    category?: string;
    sources?: string;
}
