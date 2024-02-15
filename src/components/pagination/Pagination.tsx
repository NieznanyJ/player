"use client";

import React, { useEffect } from "react";
import styles from "./pagination.module.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Pagination() {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const router = useRouter();
    const page = params.get("page") || 1;

    function handlePageChange(page: number = 1) {
        params.set("page", page.toString());
        router.replace(`${pathname}?${params.toString()}`);
    }

    useEffect(() => {
        if (!params.has("page")) {
            handlePageChange();
        }
    }, [searchParams, pathname]);

    return (
        <div className={styles.container}>
            {Array.from({ length: 5 }, (_, i) => (
                <span
                    key={i}
                    className={String(page) === (i + 1).toString() ? styles.active : styles.page}
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
