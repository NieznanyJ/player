import React from 'react'
import { getRecommendedTV, getRecommendedMovies } from '@/lib/actions'
import styles from './recommended.module.css'
import { imagePath } from '@/lib/utils'
import Image from 'next/image'

async function RecomendedList({content}: {content : any}) {

    const recomended = content.title ? await getRecommendedMovies(content.id) : await getRecommendedTV(content.id)

  return (
    <section className={styles.container}>
        <h2>You may also like</h2>
        
        <ul className={styles.recommendedList}>
        {
            recomended && recomended.results.map((rec: any) => {
                return(
                    <li className={styles.recommendedInfo} key={rec.id}>
                        <div className={styles.recommendedImageContainer}>
                            <Image className={styles.recommendedImage} src={`${imagePath}${rec.poster_path}`} alt={rec.name} fill/>
                        </div>
                        
                        <h3>{rec.name}</h3>
                    </li>
                )
            })
        }
        </ul>
        </section>
  )
}

export default RecomendedList