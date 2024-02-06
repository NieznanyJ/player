"use client";

import React, {useState} from 'react'
import styles from './navbar.module.css'

function SearchBar() {

    const [search, setSearch] = useState<string>('')

  return (
    <form>
        <input className={styles.searchBar} type="text" placeholder='Search...'/>
    </form>
  )
}

export default SearchBar