import React from "react";
import MovieList from "@/components/movieList/MovieList";
import { getMoviesByGenre } from "@/lib/actions";


async function MovieCategories({
    searchParams,
}: {
    searchParams: { page: string; genre: string };
}) {
    const {page, genre} = searchParams;



    const movies = await getMoviesByGenre(parseInt(genre), parseInt(page)); 

    return  (
        
        <div>
            <MovieList movies={movies.results} />
        </div>
    );
}

export default MovieCategories;
