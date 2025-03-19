import React from 'react'
const InputField = ({
  Name,
  Value,
  type,
  PlaceHolder,
  HandleChange,
}: {
  Name: string
  Value: string
  type: string
  PlaceHolder: string
  HandleChange: any
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={Name}
        className="block text-sm font-semibold text-gray-700"
      >
        {Name}
      </label>
      <input
        type={type}
        id={Name}
        name={Name}
        value={Value}
        onChange={HandleChange}
        required
        placeholder={PlaceHolder}
        className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
      />
    </div>
  )
}

export default InputField
