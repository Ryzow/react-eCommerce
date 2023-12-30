import React from 'react'
import { Button } from "../Fragment/Button/ButtonForm";
import { Input } from "../Fragment/Input/InputForm";
import { Label } from "../Fragment/Label/LabelForm";
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

const handleLogin = (e) => {
  e.preventDefault();
  const emailValue = e.target.email.value
  const passwordValue = e.target.password.value
  localStorage.setItem('email', emailValue)
  localStorage.setItem('password', passwordValue)
  window.location.href = '/product'
}

export const FormLogin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen flex flex-col items-center justify-center bg-slate-200">
        <form className="w-full max-w-[376px] handphone:text-[90%]" onSubmit={handleLogin}>
          <p className="text-center font-serif font-semibold text-xl text-blue-600 handphone:text-[90%]">Login</p>
          <Label htmlFor={"username"}>Email:</Label>
          <Input type={"email"} name={"email"} placeholder={"example@gmail.com"} classProp={'mb-2 mt-1 py-1 w-full'}></Input>
          <Label htmlFor={"passoword"}>Password: </Label>
          <Input type="password" name="password" placeholder="********" classProp={'mb-2 mt-1 py-1 w-full'}></Input>
          <Button type={"submit"} className={`mx-auto`}>Login</Button>
          <p className='text-center'>Don't have an account? {" "}
          <Link to={"/Register"} className='text-blue-600 hover:border-b-2 border-blue-500 duration-150'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
