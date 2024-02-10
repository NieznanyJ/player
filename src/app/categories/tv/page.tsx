import React from "react";
import MovieList from "@/components/movieList/MovieList";
import { getTVShowsByGenre } from "@/lib/actions";


async function TVCategories({
    searchParams,
}: {
    searchParams: { page: string; genre: string };
}) {
    const {page, genre} = searchParams;



    const movies = await getTVShowsByGenre(parseInt(genre), parseInt(page)); 

    return  (
        
        <div>
            <MovieList movies={movies.results} />
        </div>
    );
}

export default TVCategories;
