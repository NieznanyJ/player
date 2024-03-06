import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import NavbarSearchItem from "./NavbarSearchItem";
import UserNavBox from "./UserNavBox";
import LoginButton from "../user/login/LoginButton";
import { getServerSession } from "next-auth";
import {nextConfig} from "@/lib/auth.config"
import NavbarItem from "./NavbarItem";



 async function Navbar() {


    const logged = false;
   const session = await getServerSession(nextConfig);


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
                        <Link href="/watchlist">
                        <FontAwesomeIcon
                            className={styles.navIcon}
                            icon={faPlus}
                        />
                        Watch list</Link>
                    </li>
                </ul>
                {session?.user ?  <UserNavBox name={session?.user.name || "User"} isAdmin={session?.user.isAdmin}/> : <div className={styles.userAccount}>
                <LoginButton />
                <button ><Link href="/register">Sing up</Link></button></div>}
            </div>
            
        </nav>
    );
}

export default Navbar;
