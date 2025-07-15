import React from 'react'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch() // hook

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

  

  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body