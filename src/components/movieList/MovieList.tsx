"use client";

import React, { useEffect, useState } from "react";
import Movie from "./movie/Movie";
import { useSearchParams } from "next/navigation";
import styles from "./movieList.module.css";
import Suspense from 'react'


function MovieList({ movies }: { movies: any[] }) {
    const searchParams = useSearchParams();

    const [movieList, setMovieList] = useState<any[]>([]);

    function filterMovies() {
        const genre = searchParams.get("genre");
        if (genre) {
            const filteredMovies = movies.filter((movie) => {
                return movie.genre_ids.includes(parseInt(genre));
            });
            setMovieList(filteredMovies);
        } else {
            setMovieList(movies);
        }
    }
    useEffect(() => {
        filterMovies();
    }, [searchParams, movies]);

    return (
        <div className={styles.container}>
            {movieList &&
                movieList.map((movie: any) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
        </div>
    );
}

export default MovieList;
