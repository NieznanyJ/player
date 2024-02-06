"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./mainMovieCarousel.module.css";
import { getTrendingMovies, getImagePath } from "@/app/api/movies/route";
import Image from "next/image";
import Link from "next/link";

function MainMovieCarousel() {
    const [movies, setMovies] = useState<any>([]);
    const [imagePath, setImagePath] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            setImagePath(await getImagePath());
            const data = await getTrendingMovies();
            setMovies(data.results);
            setIsLoading(false);
        }
        getData();
    }, []);
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    console.log(movies.results, imagePath);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <Slider {...settings}>
            {movies.length && movies.map((movie: any, index:number) => {
                return index < 6 && (
                    <div key={movie.id}>
                        <div className={styles.carousel}>
                            <Image
                                src={imagePath + movie.backdrop_path}
                                alt={movie.title}
                                fill
                                className={styles.carouselImage}
                            />
                            <div className={styles.carouselContent}>
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                                <Link href="/" className={styles.button}>Watch now</Link>
                            </div>
                        </div>
                    </div>
                );
            })}
            
        </Slider>
    );
}

export default MainMovieCarousel;
