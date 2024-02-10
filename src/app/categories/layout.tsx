import React from 'react'
import CategoryFilter from '@/components/categoryFilter/CategoryFilter'
import Pagination from '@/components/pagination/Pagination'
import { getGenres } from '@/lib/actions'

async function CategoryPageLayout({children} : {children: React.ReactNode}) {

    const genres = await getGenres()
  return (
    <section className='inner-page'>
        <CategoryFilter genres={genres.genres} />
        {children}
        <Pagination />
    </section>
  )
}

export default CategoryPageLayout