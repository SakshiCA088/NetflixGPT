import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className='w-25 md:w-30 pr-4'>
        <img alt = "movie poster"
            src = {IMG_CDN_URL + posterPath} 
        />
    </div>
  )
}

export default MovieCard