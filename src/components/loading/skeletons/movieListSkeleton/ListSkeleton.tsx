import React from 'react'
import styles from './skeleton.module.css'

function ListSkeleton() {

    const items = Array.from({ length: 20 }, (_, index) => index + 1);


  return (
    <div className={styles.container}>
        {items.map((item) => {
            return (
                <div key={item} className={styles.item}>
                    <div className={styles.image}></div>
                    <div className={styles.title}>title</div>
                </div>
            )
        })}
    </div>
  )

 
}

export default ListSkeleton