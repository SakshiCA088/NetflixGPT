import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"


const GptMovieSugestions = () => {
  const gpt = useSelector(store => store.gpt)
  const {movieResults, movieNames} = gpt
  if(!movieNames) return <div className='p-3 m-3 bg-black text-white w-1/3 mx-auto'>No searches yet! {" :)"}</div>

  return <div className='p-3 m-3 bg-black/90 text-white '>
     <div>
      {movieNames.map((movie, index)=> <MovieList key={index} title={movie} movies={movieResults[index]}/>)}
     </div>
  </div>
  
}

export default GptMovieSugestions