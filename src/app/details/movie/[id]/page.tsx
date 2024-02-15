import React from "react";
import { getMovieDetails } from "@/lib/actions";
import MovieDetails from "@/components/movieDetails/MovieDetails";

async function MovieDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const movie = await getMovieDetails(parseInt(id));
    console.log(movie);

    return (
        <section>
            <MovieDetails movie={movie} />
        </section>
    );
}

export default MovieDetailsPage;
