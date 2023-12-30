import React from 'react'

export const Button = ({children, type, className, onClick = () => {}}) => {
  return (
    <>
        <button type={type} className={`${className} bg-blue-300 flex mx-auto px-3 py-1 rounded-lg hover:bg-blue-400 duration-300 text-slate-600 hover:text-slate-100 handphone:text-[90%]`} onClick={onClick}>{children}</button>
    </>
  )
}
