export const getRequestParams = <T extends {}>(params: T, str = '') =>
  (Object.keys(params) as (keyof T)[]).reduce(
    (previousValue, key) => {
      const value = params[key]
      if(value === null || value === undefined || value === ''){
        return previousValue
      }
      return `${previousValue}&${String(key)}=${value}`;
    },
    str
  );
