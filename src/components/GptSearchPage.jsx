import React from 'react'
import GptMovieSugestions from './GptMovieSugestions.jsx'
import GptSearchBar from './GptSearchBar.jsx'
import { BG_URL } from '../utils/constants.js'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img
          src = {BG_URL}
          alt = "logo"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSugestions/>
    </div>
  )
}

export default GptSearchPage