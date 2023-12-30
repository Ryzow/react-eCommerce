import React from 'react'
import { NavBarLink } from '../Fragment/NavbarLink/NavBarLink'
import { Input } from '../Fragment/Input/InputForm'

export const Navbar = ({children}) => {
  return (
    <>
        <div className='w-full h-auto flex justify-between items-center bg-blue-400 py-2'>
            <div><NavBarLink href={"/"} ClassProp={"text-xl px-3 font-bold"}>My Website</NavBarLink></div>
            <div className='flex'>
                {children}
                <Input classProp={'h-[27px] placeholder:italic placeholder:text-slate-400 mt-1'} placeholder={"Search anything..."}></Input>
                <div className='border border-l-[1px] mr-2 ml-3'></div>
                <NavBarLink href={'/login'} ClassProp={"mx-2 text-[17px] hover:border-b-[2px] border-blue-500 hover:text-[#fff] duration-[.2s]"}>Sign In</NavBarLink>
                <NavBarLink href={'/register'} ClassProp={"ml-4 mr-6 text-[17px] hover:border-b-[2px] border-blue-500 hover:text-[#fff] duration-[.2s]"}>Sign Up</NavBarLink>
            </div>
        </div>
    </>
  )
}
