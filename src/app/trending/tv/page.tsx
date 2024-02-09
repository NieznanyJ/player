import React from 'react'
import { getTrendingTVShows, getGenres } from '@/lib/actions'
import MovieList from '@/components/movieList/MovieList';



async function TrendingTVShows({searchParams}:{searchParams: any}  ) {

  const {page } = searchParams;
  const genres = await getGenres();
  

  const movies = await getTrendingTVShows();


  return (
    <div className="inner-page">
      <h1>Trending TV Shows</h1>
      <MovieList movies={movies.results} />


    </div>
  )
}

export default TrendingTVShows