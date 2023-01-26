import { useLocation } from 'react-router-dom';
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { useState } from 'react';

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const { email, password } = location.state;

  return (
    <section className='bg-[#d5d8fb] min-h-screen flex items-center justify-center'>
      <div className='bg-gray-400 flex shadow-lg max-w-3xl h-[60%] rounded-3xl'>
        <div className='lg:w-full px-28 md:px-16 sm:w-screen py-28'>
        <label>
          <span className='font-bold text-xl'>Email:</span>
          <br />
            <input type="email" value={email} className="border w-[100%] rounded-full p-4 " />
          </label>
          <label>
            <span className='font-bold text-xl mb-2'>Password:</span>
              <br />
              <div className="relative mb-6">
            <input className="border w-[100%] rounded-full p-4 " type={showPassword ? "text" : "password"} id="password" value={password} />
            {showPassword ? (
            <AiFillEyeInvisible className="absolute right-5 top-5 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) =>!prevState)}/>
          ) : (<AiFillEye className="absolute right-5 top-5 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) =>!prevState)} />)}
          </div>
            </label>
            </div>
      </div>
    </section>
  )
}

export default Profile;