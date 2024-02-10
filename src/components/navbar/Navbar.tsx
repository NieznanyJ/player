import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchItem from "./NavbarSearchItem";
import UserNavBox from "./UserNavBox";
import { getPopularMovies, getPopularTVShows } from "@/lib/actions";

import NavbarItem from "./NavbarItem";

async function getInnerNavContent() {
    const popularMovies = await getPopularMovies(1);
    const popularTVShows = await getPopularTVShows(1);
    return {
        popularMovies,
        popularTVShows,
    };
    
}

async function Navbar() {


    const innerNavContent = await getInnerNavContent();

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
                    <NavbarSearchItem />
                    <NavbarItem title="Movies" popularContent={innerNavContent.popularMovies.results} />
                    <NavbarItem title="TV Series" popularContent={innerNavContent.popularTVShows.results} />

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
            
        </nav>
    );
}

export default Navbar;
