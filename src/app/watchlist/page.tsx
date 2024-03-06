import React from 'react'
import { getServerSession } from 'next-auth';
import { nextConfig } from '@/lib/auth.config';
import MovieList from '@/components/movieList/MovieList';
import { getWatchlist } from '@/lib/actions';
import {getUsersWatchlist} from '@/lib/db';




async function WatchlistMovies(session: any) {
  const movies = session ? await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, 'movie') : [];
  const movieWatchlist = movies ? await getWatchlist(movies.watchlist, 'movie') : [];

  const tv = session ? await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, 'tv') : [];
  const tvWatchlist = tv ? await getWatchlist(tv.watchlist, 'tv') : [];

  const watchlist = [...movieWatchlist, ...tvWatchlist] as Array<any>;

  return watchlist;
}


 async function WatchlistPage() {

  const session = await getServerSession(nextConfig)

  const watchlist = session ? await WatchlistMovies(session) : [];
  return (
    <section >
      <div >
      <MovieList movies={watchlist ?? []} />
      {/* <MovieList movies={watchlist.movieWatchlist ?? []} /> */}
      
      


    </div>
    </section>
  )
}

export default WatchlistPage