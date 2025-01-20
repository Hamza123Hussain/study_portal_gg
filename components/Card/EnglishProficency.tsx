import React from 'react'
const EnglishProficiency = ({
  ielts,
  toefl,
  pte,
  duolingo,
}: {
  ielts: string
  toefl: string
  pte: string
  duolingo: string
}) => {
  // Create an array of proficiency types and their values
  const proficiencyData = [
    { label: 'IELTS', value: ielts },
    { label: 'TOEFL', value: toefl },
    { label: 'PTE', value: pte },
    { label: 'Duolingo', value: duolingo },
  ]
  // Filter out proficiency types with empty values
  const filteredData = proficiencyData.filter((item) => item.value)
  return (
    <>
      {filteredData.length > 0 && ( // Render only if there are valid proficiency scores
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            English Proficiency Requirements:
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            {filteredData.map((item) => (
              <li key={item.label}>
                <span className="font-medium">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
export default EnglishProficiency
