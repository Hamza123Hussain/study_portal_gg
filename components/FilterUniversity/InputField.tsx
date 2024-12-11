import React from 'react'

const InputField = ({ Label }: { Label: string }) => {
  return (
    <div className=" flex flex-col">
      <label htmlFor={Label}>{Label}</label>
      <input type="number" name={Label} id={Label} />
    </div>
  )
}

export default InputField
