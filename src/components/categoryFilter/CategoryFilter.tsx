"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./categoryFilter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function CategoryFilter({
    genres,
}: {
    genres: Array<{ id: number; name: string }>;
}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const router = useRouter();

    const [genreListOpen, setGenreListOpen] = useState<boolean>(false);
    const [selectedGenre, setSelectedGenre] = useState<string>("");

    function handleGenreChange(genreId: number) {
        genreId === 0
            ? params.delete("genre")
            : params.set("genre", genreId.toString());
        router.replace(`${pathname}?${params.toString()}`);
    }

    const filterRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    //Closes the genre list when clicking outside of it
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

    useEffect(() => {
        const genre = params.get("genre");
        if (genre) {
            const currentGenre = genres.find(
                (g) => g.id === parseInt(genre || "0")
            );
            setSelectedGenre(currentGenre?.name || "All");
        } else {
            setSelectedGenre("All");
        }
    }, [pathname, params]);

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
                <FontAwesomeIcon
                    icon={genreListOpen ? faChevronUp : faChevronDown} />
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
