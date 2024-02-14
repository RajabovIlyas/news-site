'use client';

import { FC } from 'react';
import { Languages } from '@/enums/languages.enum';

interface SelectProps {
  items: {
    value: string;
    label: string;
  }[];
  defaultValue?: Languages;
  name?: string;
}

const Select: FC<SelectProps> = ({ items, ...props }) => {
  return (
    <select
      {...props}
      className='search-input h-[56px] p-4 focus:border-r-2 md:w-40 md:rounded-r-none md:border-r-0'
    >
      <option className='p-4' value=''>
        Choose Language
      </option>
      {items.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
