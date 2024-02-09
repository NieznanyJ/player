import React from "react";
import SmallMovieCarousel from "@/components/smallMovieCarousel/SmallMovieCarousel";
import {
    getPopularTVShows,
    getPopularMovies,
    getTrendingMovies,
    getTrendingTVShows,
} from "@/app/api/movies/route";

async function CarouselWrapper({ title }: { title: string }) {
    var movies: any = null;
    if (title === "Popular Movies") {
        movies = await getPopularMovies();
    } else if (title === "Trending Movies") {
        movies = await getTrendingMovies();
    } else if (title === "Popular TV Shows") {
        movies = await getPopularTVShows();
    } else if (title === "Trending TV Shows") {
        movies = await getTrendingTVShows();
    }

    return <SmallMovieCarousel title={title} movies={movies?.results} />;
}

export default CarouselWrapper;
