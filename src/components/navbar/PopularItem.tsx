import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image"
import { imagePath } from "@/lib/utils";

function PopularItem({ item }: { item: any }) {
    return (
        <div className={styles.innerNavPopularItem} >
            <div className={styles.innerNavPopularItem}>
                <Image
                    className={styles.innerNavPopularItemImage}
                    src={`${imagePath}${item.backdrop_path ? item.backdrop_path : item.poster_path}`}
                    alt={item.title ? item.title : item.name}
                    fill
                    sizes="100vw"
                />
            </div>

            <h4>{item.title ? item.title : item.name}</h4>
        </div>
    );
}

export default PopularItem;
