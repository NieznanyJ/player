"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./sliderArrow.module.css";

function SliderArrow({
    currentSlide,
    slideCount,
    ...props
}: {
    currentSlide: number,
    slideCount: number,
    props: any
}) {
    return (
        <button
            {...props}
            className={
                currentSlide === slideCount - 1
                    ? styles.hidden
                    : `${styles.sliderArrow} ${styles.next}`
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}

export default SliderArrow;

//${styles.sliderArrow} ${styles.next}
