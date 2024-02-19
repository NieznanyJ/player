"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./smallMovieCarousel.module.css";
import Image from "next/image";
import Link from "next/link";
import { imagePath } from "@/lib/utils";
import { Suspense } from "react";
import LoadingIcon from "../loading/LoadingIcon";
import SliderArrowRight from "@/components/sliderArrow/SliderArrowRight"
import SliderArrowLeft from "@/components/sliderArrow/SliderArrowLeft"


function SmallMovieCarousel({
    movies,
    title,
}: {
    movies: any[];
    title: string;
}) {

    var path: string = "";
    if (title === "Trending Movies") {
        path = "trending/movies?page=1";
    }
    else if (title === "Popular Movies") {
        path = "popular/movies?page=1";
    }
    else if (title === "Trending TV Shows") {
        path = "trending/tv?page=1";
    }
    else if (title === "Popular TV Shows") {
        path = "popular/tv?page=1";
    }


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
        nextArrow: <SliderArrowRight currentSlide={0} slideCount={0} props={undefined} />,
        prevArrow: <SliderArrowLeft currentSlide={0} slideCount={0} props={undefined} />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              },
            {
                breakpoint: 1200,
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: '0',
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 992,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };




    return (
        <div className={styles.carouselWrapper}>
            <Link href={path}><h2>{title}</h2></Link>
            
                <Slider {...settings}>
                    {movies?.map((movie: any) => {
                        return (
                            movie.poster_path && (
                                <Suspense
                                    key={movie.id}
                                    fallback={<LoadingIcon />}
                                >
                                    <Link href={title.split(" ")[1].toLowerCase().includes("movie") ? `/details/movie/${movie.id}` : `/details/tv/${movie.id}`}>
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
                                                sizes="(max-width: 100vw) 100vw, 100vw"
                                                className={styles.carouselImage}
                                            />
                                        </div>
                                        <div className={styles.carouselContent}>
                                            <h3>
                                                {title.includes("TV")
                                                    ? movie.name
                                                    : movie.title}
                                            </h3>
                                        </div>
                                    </div>
                                        </Link>
                                    
                                </Suspense>
                            )
                        );
                    })}
                </Slider>
            
        </div>
    );
}

export default SmallMovieCarousel;
