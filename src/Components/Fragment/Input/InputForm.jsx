import React from 'react'

export const Input = ({type, name, placeholder, classProp}) => {
  return (
    <>
        <input 
        type={type} 
        name={name} 
        className={`text-base p-2 mx-auto rounded-lg bg-[#f2f2f2] handphone:text-[90%] ${classProp} placeholder:italic placeholder:text-slate-400`} 
        placeholder={placeholder}/>
    </>
  )
}
