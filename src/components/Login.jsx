import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
    <div><Header/></div>
    <div className='absolute'>
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-hi-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
    </div>
    <form className='bg-opacity-80 bg-black absolute p-12 w-1/2 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder='email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
        <button className='p-4 my-8 bg-red-700 w-full rounded'>Sign In</button>
    </form>
    </div>
  )
}

export default Login