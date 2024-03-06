import React from 'react'
import { getServerSession } from 'next-auth';
import { nextConfig } from '@/lib/auth.config';
import MovieList from '@/components/movieList/MovieList';
import { getWatchlist } from '@/lib/actions';
import {getUsersWatchlist} from '@/lib/db';

async function Watchlist({mediaType} : {mediaType: string}) {
    const session = await getServerSession(nextConfig);
    const media = session ? await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, mediaType) : [];
    const watchlist = media ?  await getWatchlist(media.watchlist, mediaType) : [];
  
  
    return (
      <section >
      
        {mediaType}
        <MovieList movies={watchlist ?? []} />
  
  
      
      </section>
    )
}

export default Watchlist