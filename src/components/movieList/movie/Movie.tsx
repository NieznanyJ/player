import React from 'react'
import Image from 'next/image'
import { imagePath } from '@/lib/utils'
import Link from 'next/link'
import styles from './movie.module.css'
function Movie({movie} : {movie: any}) {
  return (
    <Link href={movie.title ? `/details/movie/${movie.id}` : `/details/tv/${movie.id}`}>
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src={`${imagePath}${movie.poster_path}`} alt={movie.title ? movie.title : movie.name} fill/>
        </div>
        <div>
            <h3>{movie.title ? movie.title : movie.name}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Movie