'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const SigninForm = () => {
  const [passwordToggle, setpasswordToggle] = useState(true);
  const handlepasswordToggle = ()=>{
    setpasswordToggle(!passwordToggle);
  }
  return (
    <div className="absolute top-0 h-full">
        <form className="w-[400px] w-max-full p-4 border border-black rounded-xl text-center">
            <h1 className="font-bold text-3xl mb-4">Sign In</h1>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type={passwordToggle ? "password" : "text"} id="password" name="password" placeholder="Password" required />
                <span onClick={handlepasswordToggle} className='absolute top-[50%] translate-y-[-50%] right-4 toggle cursor-pointer'>
                  <FontAwesomeIcon icon={passwordToggle? faEye : faEyeSlash} />
                </span>
            </div>
            <span className='font-semibold text-purple-900 hover:underline'><a href="#">Forgot password?</a></span>
            <button className="w-full bg-[#123456] rounded-full p-2 text-amber-100 my-4 font-semibold">Sign In</button><br/>
            Don&apos;t have an account? <span className='font-semibold text-purple-900 hover:underline'><Link href="\sign-up">Sign Up</Link></span>
        </form>
    </div>
  )
}

export default SigninForm