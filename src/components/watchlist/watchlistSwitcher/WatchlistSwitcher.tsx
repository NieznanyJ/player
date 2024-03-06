"use client"
import React, {useState, useEffect} from 'react';
import { useRouter} from 'next/navigation';
import styles from './watchlistSwitcher.module.css'

function WatchlistSwitcher() {

  const [mediaType, setMediaType] = useState<string>("movies");
  const router = useRouter();


  return (
    <div className={styles.switcher}>
        <button onClick={() => {setMediaType('movies')
      router.replace(`/watchlist/${mediaType}`);}}>Movies </button>
        <button onClick={() => {setMediaType('tv')
      router.replace(`/watchlist/${mediaType}`);}}>TV </button>
        <button onClick={() => {setMediaType('tv')
      router.replace(`/watchlist`);}}>All </button>
    </div>
  )
}

export default WatchlistSwitcher