import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { USER_AVATAR } from '../utils/constants.js';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, seterrorMessage] = useState(null)
  const dispatch = useDispatch();

  const name = useRef(null)
  const email = useRef(null) //let's us take the reference of dom element
  const password = useRef(null)

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    const msg = validateData(email.current.value, password.current.value)
    seterrorMessage(msg)

    if(msg) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: USER_AVATAR
        })
        .then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid: uid, 
              email: email, 
              displayName: displayName,
              photoURL : photoURL
            })
          )
        }).catch((error) => {
          seterrorMessage(error.message)
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + "-" + errorMessage)
      });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      const user = userCredential.user;
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode+"-"+errorMessage)
  });

    }
  }

  

  return (
    <div>
      <Header/>
      <div>
        <img className='absolute top-0 left-0 w-full h-full object-cover z-0'
          src = "https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt = "logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-1/3 p-8 bg-black/80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg shadow-lg'>
    <h1 className='text-3xl font-bold mb-6 text-center'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

    {!isSignInForm &&
      <input
      ref={name}
      type="text"
      placeholder="Enter your name"
      className="p-3 mb-4 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    }

    <input
      ref = {email}
      type="email"
      placeholder="Email Address"
      className="p-3 mb-4 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    
    <input
      ref = {password}
      type="password"
      placeholder="Password"
      className="p-3 mb-6 w-full bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
    />
    <p className='text-red-500 text-center text-2xl'>{errorMessage}</p>
    <button className='p-3 w-full bg-red-600 hover:bg-red-700 rounded font-semibold cursor-pointer' onClick={handleButtonClick}>
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