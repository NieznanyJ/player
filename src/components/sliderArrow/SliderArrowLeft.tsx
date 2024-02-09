"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./sliderArrow.module.css";


function SliderArrow({currentSlide,slideCount, ...props} : {currentSlide: number, slideCount: number, props: any}) {
    return (
        <button {...props}
        className={
           
          (currentSlide === 0 ? styles.hidden: `${styles.sliderArrow} ${styles.prev}`)
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 1 ? true : false}
        type="button">
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}

export default SliderArrow;
//