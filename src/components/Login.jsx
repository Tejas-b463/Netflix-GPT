import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validation"
import {LOGIN_HOME} from "../utils/constant"


const Login = () => {
    const[isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);

    const toggleSignInForm = () => {
       setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = () => {
        // validate the form data
        const message = checkValidData(email.current.value,password.current.value,userName.current.value)
        setErrorMessage(message);

        // Sign / Sign Up
    }
  return (
    <div>
    <div><Header/></div>
    <div className='absolute'>
             <img src={LOGIN_HOME} alt="" />
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className='bg-opacity-80 bg-black absolute p-12 w-1/2 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm && 
         <input ref={userName} type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700'/>
        }
        <input ref={email} type="text" placeholder='email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <p className='text-red-500 p-4 font-bold text-xl '>{errorMessage}</p>
        <button className='p-4 my-8 bg-red-700 w-full rounded' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-2 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
    </form>
    </div>
  )
}

export default Login