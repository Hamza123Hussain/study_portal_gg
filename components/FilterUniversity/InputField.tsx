import React from 'react'

const InputField = ({ Label }: { Label: string }) => {
  return (
    <div className=" flex flex-col">
      <label className=" text-cyan-50" htmlFor={Label}>
        {Label}
      </label>
      <input
        className=" border-2 border-yellow-400 rounded-lg"
        type="number"
        name={Label}
        id={Label}
      />
    </div>
  )
}

export default InputField
