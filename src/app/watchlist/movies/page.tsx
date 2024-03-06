import React from 'react'
import { getServerSession } from 'next-auth';
import { nextConfig } from '@/lib/auth.config';
import MovieList from '@/components/movieList/MovieList';
import { getWatchlist } from '@/lib/actions';
import {getUsersWatchlist} from '@/lib/db';



async function WatchlistMovies() {



  const session = await getServerSession(nextConfig);
  const movies = session ? await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, 'movie') : [];
  const watchlist = movies ?  await getWatchlist(movies.watchlist, 'movie') : [];

    

  return (
    <section >
    
      
      <MovieList movies={watchlist ?? []} />


    
    </section>
  )
}

export default WatchlistMovies