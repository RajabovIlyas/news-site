'use client'

import { FC } from 'react'

interface NoticeProps {
    title: string | number;
    description: string | number;
}

const Notice: FC<NoticeProps> = ({title, description}) =>  {

    return (
        <div className="min-h-[calc(100vh-30rem)] flex items-center justify-center">
        <div className="text-center">
            <h1 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>{title}</h1>
            <p className='text-lg mt-4 text-slate-600'>{description}</p>
        </div>
    </div>
    )
}

export default Notice
