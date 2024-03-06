import React from "react";
import { imagePath } from "@/lib/utils";
import Image from "next/image";
import styles from "../movieDetails.module.scss"
import { nextConfig } from "@/lib/auth.config";
import { getServerSession } from "next-auth";
import {getUsersWatchlist, removeFromWatchlist, addToWatchlist} from '@/lib/db'
import AddToWatchlist from '@/components/movieDetails/AddToWatchlis'



async function TVDetails({ tv }: { tv: any }) {

    const session = await getServerSession(nextConfig);
    const watchlist = await getUsersWatchlist(session?.user?.userId ? session?.user?.userId : 0, 'tv');
    
    
    async function addMedia() {
        "use server"
        await addToWatchlist(session?.user?.userId ? session?.user?.userId : 0, tv.id, 'tv');
    }

    async function removeMedia(){
        "use server"
        await removeFromWatchlist(session?.user?.userId ? session?.user?.userId : 0, tv.id, 'tv')
    }
    

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
                
                <div className={styles.buttonContainer}>
                <button type="button">Watch</button>
                {session && <AddToWatchlist addMedia={addMedia} removeMedia={removeMedia} includes={watchlist ? watchlist.watchlist.includes(tv.id) : false}/>}
                </div>

                
            </div>
        </div>
    );
}

export default TVDetails;
