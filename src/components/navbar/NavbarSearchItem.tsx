"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";
import SearchBar from "./SearchBar";

function NavbarSearchItem() {
    const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

    return (
        <div className={styles.navbarSearchContainer}>
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
            {showSearchbar && <SearchBar />}
        </div>
    );
}

export default NavbarSearchItem;
