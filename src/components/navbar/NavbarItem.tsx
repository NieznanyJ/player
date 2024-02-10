import React from 'react'
import styles from './navbar.module.css'
import InnerNav from './InnerNav'
import Link from 'next/link'


function NavbarItem({popularContent, title}: {popularContent: any[], title: string}) {
  return (
    <Link className={styles.navItem} href={`/categories/${title.toLowerCase().split(" ")[0]}`}>
      <li className={styles.navItem}>
                        {title}
                        <InnerNav popularContent={popularContent} popular={title} />
                    </li>
    </Link>
  )
}

export default NavbarItem