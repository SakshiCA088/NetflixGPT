import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSugestions = () => {
  const gpt = useSelector(store => store.gpt)
  const {movieResults, movieNames} = gpt
  if(!movieNames) return <div className='p-3 m-3 bg-black text-white'>No movies found {" :("}</div>

  return <div className='p-3 m-3 bg-black/90 text-white '>
     <div>
      {movieNames.map((movie, index)=> <MovieList key={movieNames} title={movieNames} movie={movieResults[index]}></MovieList>)}
     </div>
  </div>
  
}

export default GptMovieSugestions