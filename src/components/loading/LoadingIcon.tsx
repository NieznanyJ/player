import React from "react";
import Image from "next/image";
import loadingImage from "/public/loading.svg";
import styles from "./loadingIcon.module.css";

function LoadingIcon() {
    return (
        <div className={styles.loadingContainer}>
            <Image
                src={loadingImage}
                alt="loading"
                width={100}
                height={100}
                className={styles.loadinIcon}
            ></Image>
        </div>
    );
}

export default LoadingIcon;
