
export const getRequestParams = <T extends {}> (params: T)  =>
    (Object.keys(params) as (keyof T)[]).reduce((previousValue, key) =>`${previousValue}&${String(key)}=${params[key]}`,'')
