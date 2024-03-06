import React from "react";
import { imagePath } from "@/lib/utils";
import Image from "next/image";
import styles from "./movieDetails.module.css";
import { getServerSession } from "next-auth";
import { nextConfig } from "@/lib/auth.config";
import {getUsersWatchlist, removeFromWatchlist, addToWatchlist} from '@/lib/db'
import AddToWatchlist from '@/components/movieDetails/AddToWatchlis'


async function MovieDetails({ movie }: { movie: any }) {
    const session = await getServerSession(nextConfig);
    const watchlist = await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, 'movie');
    
    
    async function addMedia() {
        "use server"
        await addToWatchlist(session?.user?.userId ? session?.user?.userId : 0, movie.id, 'movie');
    }

    async function removeMedia(){
        "use server"
        await removeFromWatchlist(session?.user?.userId ? session?.user?.userId : 0, movie.id, 'movie')
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={`${imagePath}${
                        movie.backdrop_path
                            ? movie.backdrop_path
                            : movie.poster_path
                    }`}
                    alt={movie.title}
                    fill
                />
            </div>
            <div className={styles.infoContainer}>
                <h1>{movie.title ? movie.title : movie.name}</h1>
                <div className={styles.innerInfo}>
                    <div className={styles.categoryInfo}>
                        {movie.genres &&
                            movie.genres.map(
                                (genre: { id: number; name: string }) => {
                                    return (
                                        <span key={genre.id}>{genre.name}</span>
                                    );
                                }
                            )}
                    </div>
                    <span>
                        {movie.release_date
                            ? movie.release_date.slice(0, 4)
                            : movie.first_air_date.slice(0, 4)}
                    </span>
                    {/* <span>{movie.vote_average}</span> */}
                </div>

                <div className={styles.buttonContainer}>
                    <button type="button">Watch</button>
                    {session && <AddToWatchlist addMedia={addMedia} removeMedia={removeMedia} includes={watchlist ? watchlist.watchlist.includes(movie.id) : false}/>}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
