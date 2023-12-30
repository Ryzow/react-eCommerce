import React from 'react'

export const Label = ({htmlFor, children, ClassProp}) => {
  return (
    <>
        <label htmlFor={htmlFor} className={`m-1 text-[17px] font-semibold text-slate-600 handphone:text-[90%] ${ClassProp}`}>{children}</label>
    </>
  )
}
