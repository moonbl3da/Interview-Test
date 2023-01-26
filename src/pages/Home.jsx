import React, {useState} from 'react';
import bg from '../img/wallpaper.png';
import logo from '../img/logo.png';
import GoogleLoginButton from '../components/GoogleLoginButton';
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  /*Email validation */
  function emailValidation(email) {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return regex.test(email);
}

  /*Password validation */
  function passwordValidation(password)
  {
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");
    return regex.test(password);
  }

  /*Submit handle */
  function handleSubmit(e) {
    e.preventDefault();

    if (!emailValidation(email)) {
        toast.error("Invalid email address");
    } else if (!passwordValidation(password)) {
        toast.error("Invalid password, min. 5 character with at least 1 Uppercase letter, 1 Lowercase letter, 1 Number, 1 Special character");
    } else {
        navigate("/profile", {state: { email, password } });
  }
}
  return ( 
        <section className='bg-[#d5d8fb] lg:h-screen md:w-screen flex items-center justify-center'>
            <div className='bg-white flex shadow-lg max-w-5xl h-[90%] overflow-hidden'>
            
              {/*Login side */}
              <div className='md:w-1/2 sm:w-full px-28 md:px-16 sm:h-full'>
                <img src={logo} alt='logo' className='w-20 mt-12'/>
                <h1 className='text-xl font-bold mt-8'>Login</h1>
                <p className='text-xs text-gray-500 mt-2 font-bold'>See your growth and get consulting support!</p>
                {/*Google button */}
                <GoogleLoginButton />
                {/* Sign in with Email*/}
                <div className="my-4 flex items-center  before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 ">
                  <p className="text-center text-xs font-semmibold mx-4 text-gray-400">or Sign in with Email</p>
                </div>
                {/* Login form*/}
                <form className='flex flex-col text-xs' onSubmit={handleSubmit}>
                  {/*Email input */}
                  <label className='mt-4'>
                  <span className='font-bold'>Email*</span> <br />
                  <input type="email" value={email} name="email" id="email" placeholder='mail@website.com'  
                  className='rounded-full p-3 w-full mb-4 border' 
                  onChange={e => setEmail(e.target.value)}/>
                  </label>
                  {/*Password Input */}
                  <label className=''>
                  <span className='font-bold'>Password*</span><br />
                  <input type="password" value={password} name="password" id="password" placeholder='Min. 8 character' 
                  className='rounded-full p-3 w-full border'  
                  onChange={e => setPassword(e.target.value)}/>
                  </label>
                        {/*Forget Password */}
                      <div className='flex justify-between whitespace-nowrap items-center mt-2'>
                          <label className='flex relative cursor-pointer'>
                            <input type="checkbox" className='text-[#715cde] focus:ring-[#5137f0] '/>
                            <span className='text-xs px-1 font-bold'>Remember me</span>
                          </label>
                          <a href='/' className='text-xs text-[#715cde] font-bold'>Forget password?</a>
                      </div>
                      {/*Login button*/}
                      <input type="submit" value="Login" placeholder='Login' className='w-full bg-[#5137f0] text-white px-7 py-3 text-xs mt-4
                          font-bold rounded-full border cursor-pointer'/>
                </form>
               
                {/* Not registered yet*/}
                <div className='text-xs mt-6'>
                  <span className='font-bold'>Not registered yet?</span> <a href='/' className='text-[#715cde] font-bold'>Create an Account </a>
                </div>
                {/* Copy right*/}
                <div className='sticky top-[100vh] mb-8'>
                  <span className='text-xs text-gray-400 '>2022 Syncee. All rights reserved.</span>
                </div>
                
              </div>
              {/*Left sided wallpaper*/}
              <div className='w-1/2 overflow-hidden md:block hidden '>
                <img src={bg} alt='wallpaper' className='min-w-[125%] min-h-full' /> 
              </div>
           </div>
        </section>
  )
}
