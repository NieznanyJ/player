"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./smallMovieCarousel.module.css";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/app/api/movies/route";
import { Suspense } from "react";
import LoadingIcon from "../loading/LoadingIcon";

function SmallMovieCarousel({
    movies,
    title,
}: {
    movies: any[];
    title: string;
}) {
    const [imagePath, setImagePath] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getData() {
            setIsLoading(true);
            setImagePath(await getImagePath());

            setIsLoading(false);
        }
        getData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 15000,
        cssEase: "ease",
        draggable: true,
    };

    return (
        <div className={styles.carouselWrapper}>
            <h2>{title}</h2>
            {isLoading ? (
                <LoadingIcon />
            ) : (
                <Slider {...settings}>
                    {movies?.map((movie: any) => {
                        return (
                            movie.poster_path && (
                                <Suspense
                                    key={movie.id}
                                    fallback={<LoadingIcon />}
                                >
                                    <div className={styles.carouselItem}>
                                        <div className={styles.carousel}>
                                            <Image
                                                src={
                                                    imagePath +
                                                    movie.poster_path
                                                }
                                                alt={
                                                    title.includes("TV")
                                                        ? movie.name
                                                        : movie.title
                                                }
                                                fill
                                                className={styles.carouselImage}
                                            />
                                        </div>
                                        <div className={styles.carouselContent}>
                                            <h2>
                                                {title.includes("TV")
                                                    ? movie.name
                                                    : movie.title}
                                            </h2>
                                        </div>
                                    </div>
                                </Suspense>
                            )
                        );
                    })}
                </Slider>
            )}
        </div>
    );
}

export default SmallMovieCarousel;
