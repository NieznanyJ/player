import React from "react";
import styles from "./navbar.module.css";
import InnerNav from "./InnerNav";
import Link from "next/link";
import { getPopularMovies, getPopularTVShows } from "@/lib/actions";

async function NavbarItem({ title }: { title: string }) {
  const popularContent = title === "Movies" ? await getPopularMovies(1) : await getPopularTVShows(1);


    return (
        <li className={styles.navItem}>
        
            
                {title}
                
                <InnerNav popularContent={popularContent.results} popular={title} />
            
        </li>
    );
}

export default NavbarItem;
