import React from 'react'
import Header from './Header.jsx'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import SecondContainer from './SecondContainer.jsx'
import MainContainer from './MainContainer.jsx'

const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse