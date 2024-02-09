import React from "react";
import { imagePath } from "@/lib/utils";
import Image from "next/image";
import styles from "./movieDetails.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MovieDetails({ movie }: { movie: any }) {

    const logged = true;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={`${imagePath}${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                />
            </div>
            <div className={styles.infoContainer}>
                <h1>{movie.title}</h1>
                <div className={styles.innerInfo}>
                    <div className={styles.categoryInfo}>
                        {movie.genres.map(
                            (genre: { id: number; name: string }) => {
                                return <span key={genre.id}>{genre.name}</span>;
                            }
                        )}
                    </div>
                    <span>{movie.release_date.slice(0,4)}</span>
                    {/* <span>{movie.vote_average}</span> */}
                </div>
                <p>{movie.overview}</p>
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

export default MovieDetails;
