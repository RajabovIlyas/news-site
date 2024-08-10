import { Languages } from '@/enums/languages.enum';
import { EverythingQuery } from '@/models/everything-query.model';
import { z } from 'zod';
import { DEFAULT_PAGE, PAGE_SIZE } from '@/constants/page.constant';

export const queryEverythingSchema = z.object({
  q: z.string().optional(),
  language: z.nativeEnum(Languages).nullish().transform( x => x ?? undefined ),
  pageSize: z.coerce.number().default(PAGE_SIZE),
  page: z.coerce.number().default(DEFAULT_PAGE),
});

export const checkEverythingPrams = (url: string): EverythingQuery => {
  const { searchParams } = new URL(url);
  return queryEverythingSchema.parse({
    q: searchParams.get('q'),
    language: searchParams.get('language'),
    pageSize: searchParams.get('pageSize'),
    page: searchParams.get('page'),
  });
};
