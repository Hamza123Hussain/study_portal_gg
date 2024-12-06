'use client'
import CourseCard from '@/components/Card/Main'
import { fetchAllUniversities } from '@/functions/GetAllUniversities'
import { fetchOtherUniversities } from '@/functions/GetOtherUni'
import { useEffect, useState } from 'react'
const OtherUniversitiesComponent = () => {
  const [universities, setUniversities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await fetchOtherUniversities(1, 50)
        setUniversities(data.universities)
      } catch (error) {
        console.error('There is an error:', error)
        setError('Failed to fetch universities')
      } finally {
        setLoading(false)
      }
    }

    loadUniversities()
  }, [])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div>
      <h1>All Universities</h1>
      {universities.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-2">
          {universities.map((university, index) => (
            <CourseCard key={index} course={university} />
          ))}
        </div>
      ) : (
        <p>No universities found.</p>
      )}
    </div>
  )
}
export default OtherUniversitiesComponent
