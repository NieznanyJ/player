import React from 'react'
import { getPopularTVShows, getGenres } from '@/lib/actions'
import MovieList from '@/components/movieList/MovieList';



async function PopularTVShows({searchParams}:{searchParams: any}  ) {

  const {page } = searchParams;
  const genres = await getGenres();
  

  const movies = await getPopularTVShows(parseInt(page));


  return (
    <div >
      <h1>Popular TV Shows</h1>
      <MovieList movies={movies.results} />


    </div>
  )
}

export default PopularTVShows