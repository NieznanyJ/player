"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./categoryFilter.module.css";

function CategoryFilter({
    genres,
}: {
    genres: Array<{ id: number; name: string }>;
}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const router = useRouter();

    const genre = params.get("genre");
    const currentGenre = genres.find(
        (g) => g.id === parseInt(genre || "0", 10)
    );

    const [selectedGenre, setSelectedGenre] = useState<string>(
        genre ? currentGenre?.name || "All" : "All"
    );
    const [genreListOpen, setGenreListOpen] = useState<boolean>(false);

    function handleGenreChange(genreId: number) {
        genreId === 0
            ? params.delete("genre")
            : params.set("genre", genreId.toString());
        router.replace(`${pathname}?${params.toString()}`);
    }

    const filterRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(e.target as Node) &&
                listRef.current &&
                !listRef.current.contains(e.target as Node)
            ) {
                setGenreListOpen(false);
            }
        };

        
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    useEffect(()=> {
        setSelectedGenre("All");
    },[pathname])

    return (
        <div className={styles.container}>
            <div
                ref={filterRef}
                className={
                    genreListOpen
                        ? styles.selectedGenreActive
                        : styles.selectedGenre
                }
                onClick={() => setGenreListOpen((prev) => !prev)}
            >
                {selectedGenre}
            </div>
            <ul
                ref={listRef}
                className={genreListOpen ? styles.genreList : styles.hidden}
            >
                <li
                    className={genreListOpen ? styles.genre : styles.hidden}
                    onClick={() => {
                        setSelectedGenre("All");
                        handleGenreChange(0);
                        setGenreListOpen(false);
                    }}
                >
                    All
                </li>
                {genreListOpen &&
                    genres.map((genre) => (
                        <li
                            className={styles.genre}
                            key={genre.id}
                            onClick={() => {
                                setSelectedGenre(genre.name);
                                handleGenreChange(genre.id);
                                setGenreListOpen(false);
                            }}
                        >
                            {genre.name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default CategoryFilter;
