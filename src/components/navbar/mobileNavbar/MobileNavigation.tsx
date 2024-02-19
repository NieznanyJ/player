"use client";

import React, { useState, useRef } from "react";
import styles from "./mobileNavigation.module.css";
import NavList from "./NavList";
import NavbarSearchItem from "../NavbarSearchItem";
import {motion} from "framer-motion";


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
                <motion.div transition={{duration:0.1}} initial={{x:0}}  animate={openNavList ? { y:"6px", rotate: "45deg" } : {x:0, y: 0}} className={styles.hamburgerLine}></motion.div>
                <motion.div transition={{duration: 0}} initial={{x:0}}  animate={openNavList ? {opacity:0} : {opacity: 1}} className={styles.hamburgerLine}></motion.div>
                <motion.div transition={{duration:0.1}} initial={{x:0}}  animate={openNavList ? { y: "-10px", rotate: "-45deg"} : {x:0, y:0}} className={styles.hamburgerLine}></motion.div>
            </div>
            {openNavList && (
                <NavList
                openNavList={openNavList}
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
