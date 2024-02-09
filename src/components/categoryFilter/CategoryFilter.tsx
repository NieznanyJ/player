"use client";

import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function CategoryFilter({
    genres,
}: {
    genres: Array<{ id: number; name: string }>;
}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const router = useRouter();

    function handleGenreChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const genreId = parseInt(event.target.value, 10);
        params.set("genre", genreId.toString());
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div>
            <select onChange={handleGenreChange} value={params.get("genre") || ""}>
                <option value="" disabled>
                    Select Genre
                </option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
