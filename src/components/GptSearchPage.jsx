import React from 'react'
import GptMovieSugestions from './GptMovieSugestions.jsx'
import GptSearchBar from './GptSearchBar.jsx'
import { BG_URL } from '../utils/constants.js'

const GptSearchPage = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img
          className='h-screen object-cover'
          src = {BG_URL}
          alt = "logo"
        />
      </div>
      <div>
        <GptSearchBar/>
        <GptMovieSugestions/>
      </div>
    </div>
  )
}

export default GptSearchPage