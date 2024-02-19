import React from "react";
import { getTVShowDetails } from "@/lib/actions";
import TVDetails from "@/components/movieDetails/tvDetails/TVDetails";
import SeasonList from "@/components/movieDetails/tvDetails/SeasonList";
import RecommendedList from "@/components/movieDetails/recomended/RecomendedList";
import styles from '@/components/movieDetails/movieDetails.module.css'


async function TVDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const tv = await getTVShowDetails(parseInt(id));


    return (
        <section>
            <TVDetails tv={tv} />
            <div className={styles.overview}>
                <h2>Overview</h2>
            <p>{tv.overview}</p>
            </div>
            
            <div className={styles.recomendedWrapper}>
            <SeasonList tv={tv} />
            <RecommendedList content={tv} />
            </div>
            
        </section>
    );
}

export default TVDetailsPage;
