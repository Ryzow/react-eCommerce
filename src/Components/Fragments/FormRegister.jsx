
import { Link } from "react-router-dom";
import { Button } from "../Fragment/Button/ButtonForm";
import { Input } from "../Fragment/Input/InputForm";
import { Label } from "../Fragment/Label/LabelForm";
import { Navbar } from "./Navbar";

export const FormRegister = () => {
  return (
        <div>
          <Navbar></Navbar>
          <div className="h-screen flex flex-col items-center justify-center bg-slate-200">
            <form className="w-full max-w-[376px] handphone:text-[90%]">
              <p className="text-center font-serif font-semibold text-xl text-blue-600 handphone:text-[90%]">Register</p>
              <Label htmlFor={"username"}>Username:</Label>
              <Input type={"text"} name={"username"} placeholder={"Username"} classProp={'mb-2 mt-1 py-1 w-full'}></Input>
              <Label htmlFor={"email"}>Email:</Label>
              <Input type={"email"} name={"email"} placeholder={"example123@gmail.com"} classProp={'mb-2 mt-1 py-1 w-full '}></Input>
              <Label htmlFor={"password"}>Password:</Label>
              <Input type={"password"} name={"password"} placeholder={"********"} classProp={'mb-2 mt-1 py-1 w-full'}></Input>
              <Label htmlFor={"confirmPassoword"}>Confirm Password:</Label>
              <Input type="password" name="confirmPassoword" placeholder="********" classProp={'mb-2 mt-1 py-1 w-full'}></Input>
              <Button type={"submit"} className={`mx-auto`}>Register</Button>
              <p className='text-center'>Already have an account? {" "}
              <Link to={"/login"} className='text-blue-600 hover:border-b-2 border-blue-500 duration-150'>Login</Link>
              </p>
            </form>
          </div>
        </div>    
  )
}
