import React from 'react'
import { getPopularMovies, getGenres } from '@/lib/actions'
import MovieList from '@/components/movieList/MovieList';



async function PopularMovies({searchParams}:{searchParams: any}  ) {

  const {page } = searchParams;
  const genres = await getGenres();
  

  const movies = await getPopularMovies(parseInt(page));


  return (
    <div >
      <h1>Popular movies</h1>
      <MovieList movies={movies.results} />


    </div>
  )
}

export default PopularMovies