
import { fetcher } from '@/services/fetcher.request'
import { sources as sourcesEndpoint } from '@/constants/endpoints.constant'
import { SourceReq } from '@/models/source.model'


export default async function Home() {

    const { sources } = await fetcher<SourceReq>(sourcesEndpoint)


    return (
        <div className='flex-grow max-w-screen-xl mx-auto'>
            <main className='px-5'>
                {sources.map(({ url, id, name, description, category, country, language }) => (
                    <div key={id} className='mt-3 p-2'>
                        <a href={url} target='_blank'>

                            <div className='flex-grow flex flex-col justify-between'>
                                <div>
                    <span
                        className='text-blue-400 uppercase tracking-wider text-sm font-medium'> {category} </span>
                                    <h2 className='text-3xl font-semibold leading-snug tracking-tight '> {name} </h2>
                                    <h4 className='text-lg leading-snug tracking-tight mt-1 '>{description}</h4>
                                </div>
                                <div className='flex gap-2 mt-3'><span
                                    className='text-gray-400'>{language} • {country}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    )
}
