import React from 'react'
import Header from './Header.jsx'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import SecondContainer from './SecondContainer.jsx'
import MainContainer from './MainContainer.jsx'
import usePopularMovies from '../hooks/usePopularMovies.js'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage.jsx'

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies()
  usePopularMovies()

  return (
    <div>
      <Header/>
      {
        showGptSearch ? 
        (
           <GptSearchPage/> 
        ) : (
        <>
          <MainContainer/>
          <SecondContainer/>
        </>
      )
      }
      
    </div>
  )
}

export default Browse