import { FC, HTMLInputTypeAttribute } from 'react'

interface InputProps {
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    placeholder?: string;
    name?: string;
    error?: string;
}

const Input: FC<InputProps> = ({ error, ...props }) => {
    return (
        <div className='mb-5' data-astro-cid-uwnxe3i2=''>
            <input {...props}
                   className='w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100'
                   name='name' />
            <div className='empty-feedback invalid-feedback text-red-400 text-sm mt-1' hidden={!!error}>
                {error}
            </div>
        </div>
    )
}


export default Input;
