'use client'
import CourseCard from '@/components/Card/Main'
import Main from '@/components/FilterUniversity/Main'
import Loader from '@/components/Loader'
import MainPagination from '@/components/Pagination/MainPagination'
import { fetchUKUniversities } from '@/functions/GetUkUniversities'
import { useEffect, useState } from 'react'

const UKUniversitiesComponent = () => {
  const [universities, setUniversities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [Pages, setPage] = useState(1)
  const [currentpage, setcurrentpage] = useState(1)
  useEffect(() => {
    const loadUniversities = async () => {
      try {
        const data = await fetchUKUniversities(1, 50)
        setUniversities(data.universities)
        setPage(data.totalPages)
      } catch (error) {
        console.error('There is an error:', error)
        setError('Failed to fetch universities')
      } finally {
        setLoading(false)
      }
    }

    loadUniversities()
  }, [])

  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>

  return (
    <div
      className="bg-cover bg-center bg-repeat h-full"
      style={{
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png")', // Replace with your UK flag image path
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <div className="bg-opacity-60 bg-black py-8">
        <Main setUniversities={setUniversities} universities={universities} />
        {universities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {universities.map((university, index) => (
              <CourseCard key={index} course={university} />
            ))}
          </div>
        ) : (
          <p className="text-white text-center">No universities found.</p>
        )}
        <MainPagination setcurrentpage={setcurrentpage} TotalPages={Pages} />
      </div>
    </div>
  )
}

export default UKUniversitiesComponent
