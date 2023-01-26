import { signInWithPopup } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {FcGoogle} from 'react-icons/fc';
import {auth, provider} from "../firabase-confing";

export default function GoogleLoginButton() {

  const [value, setValue]=useState(""); 
  const handleLogin = () => {  
    signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
  })
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div>
      {value ? <button type="button" className="flex items-center justify-center w-full bg-white text-black px-7 py-3 text-xs mt-8
        font-bold rounded-full border" onClick={handleLogout}>
        <FcGoogle className="text-xl bg-white rounded-full mr-2" />
        Sign out {value}
      </button> :

      <button type="button" className="flex items-center justify-center w-full bg-white text-black px-7 py-3 text-xs mt-8
        font-bold rounded-full border" onClick={handleLogin}>
        <FcGoogle className="text-xl bg-white rounded-full mr-2" />
        Sign in with Google
      </button>
    }
    </div>
  )
}
