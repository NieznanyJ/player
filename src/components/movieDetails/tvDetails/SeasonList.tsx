import React from 'react'
import Image from 'next/image'
import { imagePath } from '@/lib/utils'
import styles from './seasonList.module.css'

function SeasonList({tv}: {tv: any}) {
    console.log(tv.id)

  return (
    <section className={styles.container}>
        
        <h2>Seasons</h2>
        <ul className={styles.seasonList}>
        {tv && tv.seasons?.map((season: any) => {
            return (
                <li key={season.id} className={styles.seasonInfo}>
                    <div className={styles.seasonImageContainer}><Image className={styles.seasonImage} src={`${imagePath}${season.poster_path ? season.poster_path : tv.poster_path}`} alt="season" fill/></div>
                    <h3>{season.name}</h3>
                    <div className={styles.seasonInfoText}>
                    
                    <p>{season.air_date && season.air_date.slice(0,4)}</p>
                    <p>{season.episode_count} episodes</p>
                    </div>
                    
                </li>
            )
        })}
    </ul>
    </section>
  )
}

export default SeasonList