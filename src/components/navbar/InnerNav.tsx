import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { imagePath } from "@/lib/utils";
import { getGenres } from "@/lib/actions";
import Link from "next/link";
import PopularItem from "./PopularItem";

async function InnerNav({
    popular = "",
    popularContent,
}: {
    popular: string;
    popularContent: any[];
}) {
    const genres = await getGenres();

    return (
        <div className={styles.innerNavigation}>
            <div className={styles.innerNavigationCategoryList}>
                <Link href={`/categories/${popular.toLowerCase().split(" ")[0]}?page=1`}><h3>
                        Categories
                    </h3></Link>
                <Link
                    href={`/popular/${
                        popular.toLowerCase().split(" ")[0]
                    }?page=1`}
                >
                    <h3 className={styles.innerNavSmallerScreenLinks}>
                        Popular
                    </h3>
                </Link>
                <Link
                    href={`/trending/${
                        popular.toLowerCase().split(" ")[0]
                    }?page=1`}
                >
                    <h3 className={styles.innerNavSmallerScreenLinks}>
                        Tranding
                    </h3>
                </Link>

                <ul>
                    {genres?.genres.map(
                        (
                            genre: { name: string; id: number },
                            index: number
                        ) => {
                            return (
                                index < 10 && (
                                    <Link
                                        key={genre.id}
                                        href={`/categories/${
                                            popular.toLowerCase().split(" ")[0]
                                        }?page=1&genre=${genre.id}`}
                                    >
                                        <li>{genre.name}</li>
                                    </Link>
                                )
                            );
                        }
                    )}
                </ul>
            </div>

            <div className={styles.innerNavPopular}>
                <h3>Popular</h3>
                <div className={styles.innerNavPopularContainer}>
                    {popularContent &&
                        popularContent
                            .filter(
                                (item) =>
                                    item.poster_path &&
                                    item.backdrop_path &&
                                    item.title ? item.title.length < 20 : item.original_name.length < 40
                            )
                            .slice(0, 6)
                            .map((item: any) => (
                                <Link
                                    key={item.id}
                                    href={
                                        item.title
                                            ? `/details/movie/${item.id}`
                                            : `/details/tv/${item.id}`
                                    }
                                >
                                    <PopularItem item={item} />
                                </Link>
                            ))}
                </div>
            </div>
        </div>
    );
}

export default InnerNav;
