'use client'
import CardSingle from '@/components/Card/SingleCard'
import { GetSingleCourse } from '@/functions/GetSingleUniversity'
import React, { useEffect, useState } from 'react'
interface SingleCardProps {
  params: { id: string }
}
const SingleCard = ({ params }: SingleCardProps) => {
  const [SingleCourse, SetCourse] = useState<any | null>(null)
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const Data = await GetSingleCourse(params.id)
        SetCourse(Data) // Set the course data in state
      } catch (error) {
        console.error('Error fetching course:', error) // Handle error fetching the course
      }
    }
    fetchCourse() // Call the async function inside useEffect
  }, [params.id]) // Run effect when params.id changes

  return <div>{SingleCourse && <CardSingle course={SingleCourse} />}</div>
}
export default SingleCard
