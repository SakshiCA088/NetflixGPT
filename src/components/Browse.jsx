import React from 'react'
import Header from './Header.jsx'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import SecondContainer from './secondContainer.jsx'
import MainContainer from './mainContainer.jsx'

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