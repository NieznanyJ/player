"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import InnerNav from "./InnerNav";
import UserNavBox from "./UserNavBox";
import SearchBar from "./SearchBar";

function Navbar() {
    const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

    const logged = true;

    return (
        <nav className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <span>Logo</span>
                </div>

                <ul className={styles.navigationList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={styles.navItem}
                        onClick={() => setShowSearchbar((prev) => !prev)}
                    >
                        <FontAwesomeIcon
                            className={styles.navIcon}
                            icon={faMagnifyingGlass}
                        />
                        Search
                    </li>
                    <li className={styles.navItem}>
                        Movies
                        <InnerNav popular="movies" />
                    </li>
                    <li className={styles.navItem}>
                        TV Series
                        <InnerNav popular="tv series" />
                    </li>
                    <li className={styles.navItem}>
                        <FontAwesomeIcon
                            className={styles.navIcon}
                            icon={faPlus}
                        />
                        Watch list
                    </li>
                </ul>
                {logged ? <UserNavBox /> : <Link href="/login">Login</Link>}
            </div>
            {showSearchbar && <SearchBar />}
        </nav>
    );
}

export default Navbar;
