import React from 'react'
import ListSkeleton from "@/components/loading/skeletons/movieListSkeleton/ListSkeleton"
import CategoryFilter from '@/components/categoryFilter/CategoryFilter'
import { getGenres } from '@/lib/actions'

async function page() {
    const genres = await getGenres()
  return (
   null
  )
}

export default page