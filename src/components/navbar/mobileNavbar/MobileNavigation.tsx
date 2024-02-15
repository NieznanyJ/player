"use client";

import React, { useState, useRef } from "react";
import styles from "./mobileNavigation.module.css";
import NavList from "./NavList";
import NavbarSearchItem from "../NavbarSearchItem";
function MobileNavigation() {
    const [openNavList, setOpenNavList] = useState<boolean>(false);
    const [openMobileSearch, setOpenMobileSearch] = useState<boolean>(false);

    const hamburgerRef = useRef<HTMLDivElement>(null);
    return (
        <nav className={styles.container}>
            

            <div
                className={styles.hamburger}
                onClick={() => {
                    setOpenNavList((prev) => !prev);
                    setOpenMobileSearch(false);
                }}
                ref={hamburgerRef}
            >
                Open
            </div>
            {openNavList && (
                <NavList
                    hamburgerRef={hamburgerRef}
                    setOpenNavList={setOpenNavList}
                />
            )}
            <NavbarSearchItem
                openMobileSearch={openMobileSearch}
                setOpenMobileSearch={setOpenMobileSearch}
                setOpenNavList={setOpenNavList}
            />
        </nav>
    );
}

export default MobileNavigation;
