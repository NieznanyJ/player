import React from "react";
import styles from "./carouselSkeleton.module.css"

function SmallMovieCarouselSkeleton() {
    return (
        <div className={styles.skeletonWrapper}>
            <div className={styles.skeletonItem}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonTitle}></div>
            </div>
            
        </div>
    );
}

export default SmallMovieCarouselSkeleton;
