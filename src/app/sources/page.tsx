import { fetcher } from '@/services/fetcher.request';
import { sources as sourcesEndpoint } from '@/constants/endpoints.constant';
import { SourceReq } from '@/models/source.model';
import Source from '@/components/Source/Source';

export default async function Home() {
  const { sources } = await fetcher<SourceReq>(sourcesEndpoint);

  return (
    <div className='mx-auto max-w-screen-xl flex-grow'>
      <main className='px-5'>
        {sources.map(({ id, ...source }) => (
          <Source key={id} {...source} />
        ))}
      </main>
    </div>
  );
}
