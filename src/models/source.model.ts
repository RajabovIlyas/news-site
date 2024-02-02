import { Countries } from '@/enums/countries.enum'
import { Languages } from '@/enums/languages.enum'

export interface SourceModel{
    "id": string,
    "name": string,
    "description": string,
    "url": string,
    "category": string,
    "language": Languages,
    "country": Countries
}

export interface SourceReq {
    status: string;
    sources: SourceModel[];
}
