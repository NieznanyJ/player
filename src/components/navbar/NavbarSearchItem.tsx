"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";
import SearchBar from "./SearchBar";

function NavbarSearchItem({
    setOpenNavList = () => {},
    setOpenMobileSearch = () => {},
    openMobileSearch = undefined,
}: {
    setOpenNavList?: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenMobileSearch?: React.Dispatch<React.SetStateAction<boolean>>;
    openMobileSearch?: boolean | undefined;
}) {
    const [showSearchbar, setShowSearchbar] = useState<boolean>(false);

    const [navbar, setNavbar] = useState<HTMLElement | null>(null);

    function handleClick(){
        setShowSearchbar(prev => !prev);
                    setOpenMobileSearch(prev => !prev);
                    setOpenNavList && setOpenNavList(false);
    }

  

    

    return (
        <div className={styles.navbarSearchContainer}>
            <li
                className={styles.navItem}
                onClick={() => {
                    handleClick()
                    
                
                }}
            >
                <FontAwesomeIcon
                    className={styles.navIcon}
                    icon={faMagnifyingGlass}
                />
                Search
            </li>
            {showSearchbar && openMobileSearch === undefined && <SearchBar />}
            {openMobileSearch && <SearchBar />}
        </div>
    );
}

export default NavbarSearchItem;
