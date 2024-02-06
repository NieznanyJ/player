import React from "react";
import styles from "./wrapper.module.css";
import SmallMovieCarousel from "../smallMovieCarousel/SmallMovieCarousel";
import {
    getPopularMovies,
    getTrendingMovies,
    getPopularTVShows,
    getTrendingTVShows,
} from "@/app/api/movies/route";
import { title } from "process";

async function getAllMovies() {
    const allMovies: any[] = [];

    try {
        const movies = await Promise.all([
            getPopularMovies(1),
            getTrendingMovies(),
            getPopularTVShows(1),
            getTrendingTVShows(),
        ]);

        movies.forEach((movie) => {
            allMovies.push(movie);
        });

        return allMovies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        throw error;
    }
}

async function Wrapper() {
    const allMovies = await getAllMovies();
    const titles = ["Popular Movies", "Trending Movies", "Popular TV Shows", "Trending TV Shows"]

    return <section className={styles.wrapper}>
        {allMovies && allMovies.map((movieList: any, index:number) =>{
            return <SmallMovieCarousel title={titles[index]} key={index} movies={movieList.results} />;
        })}
    </section>;
}

export default Wrapper;
