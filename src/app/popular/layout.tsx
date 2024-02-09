import React from "react";
import Pagination from "@/components/pagination/Pagination";
import CategoryFilter from "@/components/categoryFilter/CategoryFilter";
import { getGenres } from "@/lib/actions";

async function InnerLayout({ children }: { children: React.ReactNode }) {

    const genres = await getGenres();
    

    return (
        <section className="inner-page">
            {/* <CategoryFilter genres={genres.genres} /> */}
            {children}
            <Pagination />
        </section>
    );
}

export default InnerLayout;
