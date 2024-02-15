import React from "react";
import { getTVShowDetails } from "@/lib/actions";
import MovieDetails from "@/components/movieDetails/MovieDetails";

async function TVDetailsPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const tv = await getTVShowDetails(parseInt(id));


    return (
        <section>
            <MovieDetails movie={tv} />
        </section>
    );
}

export default TVDetailsPage;
