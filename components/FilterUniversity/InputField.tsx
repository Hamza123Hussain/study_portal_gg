import React, { useState } from 'react'

const InputField = () => {
  // Initial state setup with an array of filter options
  const [FilterOption, SetOptions] = useState([
    { Name: 'tuitionFeeNumber', value: 0 },
    { Name: 'minimumGPA', value: 0 },
    { Name: 'ielts', value: 0 },
    { Name: 'toefl', value: 0 },
    { Name: 'pte', value: 0 },
    { Name: 'duolingo', value: 0 },
  ])
  // Handle the change in input fields
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the name and value of the input field
    const { name, value } = e.target
    // Update the corresponding filter option in the state array
    SetOptions((prev) =>
      prev.map((option) =>
        option.Name === name
          ? { ...option, value: parseInt(value) || 0 }
          : option
      )
    )
  }
  return (
    <>
      {FilterOption.map((element) => (
        <div key={element.Name} className="flex flex-col gap-2">
          <label className="text-cyan-50 text-base" htmlFor={element.Name}>
            {element.Name == 'tuitionFeeNumber' ? 'Tution Fee' : element.Name}
          </label>
          <input
            value={element.value}
            name={element.Name} // Use the Name as the input's name
            placeholder="Enter The Details"
            className="border-2 border-yellow-400 rounded-lg p-1 bg-black text-white"
            type="number"
            onChange={HandleChange} // Handle the change event
          />
        </div>
      ))}
    </>
  )
}
export default InputField
