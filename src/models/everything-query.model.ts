import { Language } from '@/enums/language.enum'
import { SortBy } from '@/enums/sort-by.enum'

export interface EverythingQuery{
    pageSize?: number;
    page?: number;
    q?: string;
    language?:Language,
    sortBy?: SortBy,
}
