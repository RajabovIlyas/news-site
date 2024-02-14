import { Languages } from '@/enums/languages.enum';
import { SortBy } from '@/enums/sort-by.enum';

export interface EverythingQuery {
  pageSize?: number;
  page?: number;
  q?: string;
  language?: Languages;
  sortBy?: SortBy;
}
