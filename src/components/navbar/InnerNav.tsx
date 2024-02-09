import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { imagePath } from "@/lib/utils";

async function InnerNav({
    popular = "",
    popularContent,
}: {
    popular: string;
    popularContent: any[];
}) {
    return (
        <div className={styles.innerNavigation}>
            <div className={styles.innerNavigationCategoryList}>
                <h3>Categories</h3>
                <ul>
                    <li>Action</li>
                    <li>Fantasy</li>
                    <li>Horror</li>
                    <li>Thriller</li>
                </ul>
            </div>
            <div className={styles.innerNavPopular}>
                {popularContent &&
                    popularContent.map((item: any, index: number) => {
                        return (
                            index < 6 && (
                                <div
                                    className={styles.innerNavPopularItem}
                                    key={index}
                                >
                                    <div className={styles.innerNavPopularItem}>
                                        <Image
                                            className={
                                                styles.innerNavPopularItemImage
                                            }
                                            src={`${imagePath}${item.poster_path}`}
                                            alt={
                                                item.title
                                                    ? item.title
                                                    : item.name
                                            }
                                            fill
                                            sizes="100vw"
                                        />
                                    </div>
                                    <h4>
                                        {item.title ? item.title : item.name}
                                    </h4>
                                </div>
                            )
                        );
                    })}
            </div>
        </div>
    );
}

export default InnerNav;
