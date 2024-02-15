import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchItem from "./NavbarSearchItem";
import UserNavBox from "./UserNavBox";


import NavbarItem from "./NavbarItem";



 function Navbar() {


    const logged = true;



    return (
        <nav className={`${styles.container} navbar`}>
            <div className={styles.wrapper}>
                <div>
                    <span>Logo</span>
                </div>

                <ul className={styles.navigationList}>
                    <li className={styles.navItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <NavbarSearchItem />
                    <NavbarItem title="Movies"  />
                    <NavbarItem title="TV Series"  />

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
