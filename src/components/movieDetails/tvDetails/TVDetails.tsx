import React from "react";
import { imagePath } from "@/lib/utils";
import Image from "next/image";
import styles from "../movieDetails.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


function TVDetails({ tv }: { tv: any }) {

    const logged = true;
    

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={`${imagePath}${tv.backdrop_path ? tv.backdrop_path : tv.poster_path }`}
                    alt={tv.title}
                    fill
                />
            </div>
            <div className={styles.infoContainer}>
                <h1>{tv.title ? tv.title : tv.name}</h1>
                <div className={styles.innerInfo}>
                    <div className={styles.categoryInfo}>
                        {tv.genres && tv.genres.map(
                            (genre: { id: number; name: string }) => {
                                return <span key={genre.id}>{genre.name}</span>;
                            }
                        )}
                    </div>
                    <span>{tv.release_date ? tv.release_date.slice(0,4) : tv.first_air_date.slice(0,4)}</span>
                </div>
                <p>{tv.overview}</p>
                <div className={styles.buttonContainer}>
                <button type="button">Watch</button>
                {logged && <button type="button">
                    <FontAwesomeIcon icon={faPlus} />
                    Add to watchlist</button>}
                </div>
            </div>
        </div>
    );
}

export default TVDetails;
