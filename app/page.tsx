'use client'
import CourseCard from '@/components/Card/Main'
import Loader from '@/components/Loader'
import MainPagination from '@/components/Pagination/MainPagination'
import { fetchAllUniversities } from '@/functions/GetAllUniversities'
import { useEffect, useState } from 'react'
const UniversitiesComponent = () => {
  const [universities, setUniversities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [Pages, setPages] = useState(1)
  const [currentpage, setcurrentpage] = useState(1)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await fetchAllUniversities(currentpage)
        setUniversities(data.universities)
        setPages(data.totalPages)
      } catch (error) {
        console.error('There is an error:', error)
        setError('Failed to fetch universities')
      } finally {
        setLoading(false)
      }
    }
    loadUniversities()
  }, [currentpage])
  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      {universities.length > 0 ? (
        <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 mt-3 md:grid-cols-3 space-y-2">
          {universities.map((university, index) => (
            <CourseCard key={index} course={university} />
          ))}
        </div>
      ) : (
        <p>No universities found.</p>
      )}
      <MainPagination
        currentpage={currentpage}
        setcurrentpage={setcurrentpage}
        TotalPages={Pages}
      />
    </div>
  )
}
export default UniversitiesComponent
