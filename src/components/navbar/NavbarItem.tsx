import React from 'react'
import styles from './navbar.module.css'
import InnerNav from './InnerNav'


function NavbarItem({popularContent, title}: {popularContent: any[], title: string}) {
  return (
    <li className={styles.navItem}>
                        {title}
                        <InnerNav popularContent={popularContent} popular={title} />
                    </li>
  )
}

export default NavbarItem