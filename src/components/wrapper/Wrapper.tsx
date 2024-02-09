import React from "react";
import styles from "./wrapper.module.css";
import { Suspense } from "react";
import CarouselWrapper from "./CarouselWrapper";
import SmallMovieCarouselSkeleton from "@/components/loading/skeletons/SmallMovieCarouselSkeleton";

async function Wrapper() {
    const titles = [
        "Popular Movies",
        "Trending Movies",
        "Popular TV Shows",
        "Trending TV Shows",
    ];

    return (
        <section className={styles.wrapper}>
            {titles.map((title: any, index: number) => {
                return (
                    <Suspense key={index} fallback={<SmallMovieCarouselSkeleton />}>
                        <CarouselWrapper title={title} />
                    </Suspense>
                );
            })}
        </section>
    );
}

export default Wrapper;
