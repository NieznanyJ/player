import React from 'react'
import { getTrendingMovies, getGenres } from '@/lib/actions'
import MovieList from '@/components/movieList/MovieList';



async function TrendingMovies({searchParams}:{searchParams: any}  ) {

  const {page } = searchParams;
  const genres = await getGenres();
  

  const movies = await getTrendingMovies();


  return (
    <div className="inner-page">
      <h1>Trending movies</h1>
      <MovieList movies={movies.results} />


    </div>
  )
}

export default TrendingMovies