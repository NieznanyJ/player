"use client";

import React, { useEffect, useState, useCallback } from "react";
import Movie from "./movie/Movie";
import { useSearchParams } from "next/navigation";
import styles from "./movieList.module.css";
import {useRouter} from 'next/navigation';


function MovieList({ movies }: { movies: any[] }) {
    const searchParams = useSearchParams();
    const router = useRouter()

    const [movieList, setMovieList] = useState<any[]>([]);

    const filterMovies = useCallback(() => {
        const genre = searchParams.get("genre");
        if (genre) {
            const filteredMovies = movies.filter((movie) => {
                return movie.genre_ids.includes(parseInt(genre));
            });
            setMovieList(filteredMovies);
        } else {
            setMovieList(movies);
        }
    }, [searchParams, movies]);

    useEffect(() => {
        filterMovies();
    }, [filterMovies]);

    useEffect(()=>{
        router.refresh();
    },[])
   

    return (
        <div className={styles.container}>
            {movieList && movieList.length !== 0 ?
                movieList.map((movie: any) => {
                    return movie.poster_path && movie.backdrop_path && <Movie key={movie.id} movie={movie} />;
                }) : <h1>No media found</h1>}
        </div>
    );
}

export default MovieList;
