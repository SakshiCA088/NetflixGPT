import React, { useEffect } from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice.js'
import { auth } from '../utils/firebase.js'

const Body = () => {
  const dispatch = useDispatch() // hook
  //const navigate = useNavigate()
  const appRouter = createBrowserRouter([
    {
      path : "/",
      element : <Login/>
    }, 

    {
      path : "/browse",
      element : <Browse/>
    },
  ])

  useEffect(() => {
    onAuthStateChanged( auth, (user) => {
      if(user){ //signin/up
        const {uid, email, displayName, photoURL} = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL : photoURL}))
        //navigate("/browse")
      } else {//out
        dispatch(removeUser())
        //navigate("/")
      }
    })
  }, [])

  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body