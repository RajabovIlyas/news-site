import { Languages } from '@/enums/languages.enum';
import { Countries } from '@/enums/countries.enum';

export interface SourceQueryModel {
  category: string;
  language: Languages;
  country: Countries;
}
