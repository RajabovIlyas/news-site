'use client'

import { FC } from 'react'
import Select from '@/components/Select/Select'
import { languages } from '@/constants/languages.constant'
import { Languages } from '@/enums/languages.enum'
import SearchInput from '@/components/SearchInput/SearchInput'

interface SearchFormProps {
    q?: string,
    language?: Languages
}
const SearchForm:FC<SearchFormProps> = ({q, language}) => {

    return(
        <form className='mt-4 flex w-full'>
            <Select name="language" items={languages} defaultValue={language}/>
            <SearchInput name="q" defaultValue={q}/>
        </form>
    )
}

export default SearchForm;
