import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div>
        <img className='absolute top-0 left-0 w-full h-full object-cover z-0'
          src = "https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
          alt = "logo"
        />
      </div>
      <form className='w-1/3 p-8 bg-black/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg shadow-lg'>
    <h1 className='text-3xl font-bold mb-6 text-center'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

    {!isSignInForm &&
      <input
      type="text"
      placeholder="Enter your name"
      className="p-3 mb-4 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    }

    <input
      type="email"
      placeholder="Email Address"
      className="p-3 mb-4 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    
    <input
      type="password"
      placeholder="Password"
      className="p-3 mb-6 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <button className='p-3 w-full bg-red-600 hover:bg-red-700 rounded font-semibold cursor-pointer'>
    {isSignInForm ? "Sign In" : "Sign Up"}
    </button>
    <p className='font-light px-6 py-4 text-center cursor-pointer' onClick={toggleSignIn}>
    {isSignInForm ? "New to Netflix? Sign up now!" : "Already registered? Sign In now!"}
      
    </p>
</form>

    </div>
  )
}

export default Login