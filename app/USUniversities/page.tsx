'use client'
import CourseCard from '@/components/Card/Main'
import { fetchUSUniversities } from '@/functions/GetUsUniversities'
import { useEffect, useState } from 'react'

const UsUniversitiesOnly = () => {
  const [universities, setUniversities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await fetchUSUniversities(1, 50)
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
    <div
      className="bg-cover bg-center bg-repeat h-full"
      style={{
        backgroundImage:
          'url("    https://cdn.britannica.com/33/4833-050-F6E415FE/Flag-United-States-of-America.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="bg-opacity-50 bg-black py-8">
        {' '}
        {/* Overlay for better readability */}
        {universities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {universities.map((university, index) => (
              <CourseCard key={index} course={university} />
            ))}
          </div>
        ) : (
          <p className="text-white text-center">No universities found.</p>
        )}
      </div>
    </div>
  )
}

export default UsUniversitiesOnly
