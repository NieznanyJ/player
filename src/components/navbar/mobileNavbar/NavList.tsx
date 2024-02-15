"use client";

import React, {useEffect, useRef} from 'react';
import styles from './mobileNavigation.module.css';
import UserNavBox from '../UserNavBox';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

function NavList({setOpenNavList, hamburgerRef} : {setOpenNavList: React.Dispatch<React.SetStateAction<boolean>>,  hamburgerRef: React.RefObject<HTMLDivElement>}) {

    const logged = true;
    const mobileNavRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
          if (
            mobileNavRef.current &&
            !mobileNavRef.current.contains(event.target as Node) &&
            !hamburgerRef.current?.contains(event.target as Node)
          ) {
            setOpenNavList(false);
          }
        }
    
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [setOpenNavList, hamburgerRef]);

    return (
        <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{duration: 0.2}}
            className={styles.navlistContainer}
            ref={mobileNavRef}
        >
            <ul className={styles.navList}>
            {logged ? <UserNavBox /> : <Link href="/login">Login</Link>}
                <li className={styles.navItem}><Link href="/" onClick={() => setOpenNavList(false)}>Home</Link></li>
                <li className={styles.navItem}>Movies
                    <ul className={styles.innerNav}>
                        <li className={styles.navItem}><Link href={`/popular/movies`} onClick={() => setOpenNavList(false)}>Popular</Link></li>
                        <li className={styles.navItem}><Link href={`/trending/movies`} onClick={() => setOpenNavList(false)}>Trending</Link></li>
                        <li className={styles.navItem}><Link href={`/categories/movies?page=1`} onClick={() => setOpenNavList(false)}>Categories</Link></li>
                        
                    </ul>
                </li>
                <li className={styles.navItem}>TV Shows
                <ul className={styles.innerNav}>
                        <li className={styles.navItem}><Link href={`/popular/tv`} onClick={() => setOpenNavList(false)}>Popular</Link></li>
                        <li className={styles.navItem}><Link href={`/trending/tv`} onClick={() => setOpenNavList(false)}>Trending</Link></li>
                        <li className={styles.navItem}><Link href={`/categories/tv?page=1`} onClick={() => setOpenNavList(false)}>Categories</Link></li>
                        
                    </ul></li>
                <li className={styles.navItem}>
                        <FontAwesomeIcon
                            className={styles.navIcon}
                            icon={faPlus}
                        />
                        Watch list
                    </li>
            </ul>
        </motion.div>
    );
}

export default NavList;
