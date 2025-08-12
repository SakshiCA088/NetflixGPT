import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()

  //search movie in TMDB
  const searchInTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
  

  const json = await data.json()

  return json.results
  }

  const handleGptBarButtonClick = async () => {
    console.log(searchText.current.value)

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated. Example : movie1, movie2, movie3, movie4, movie5"

    const gptResults = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'developer', content: gptQuery },
      ],
    });

    if(!gptResults.choices){

      console.log("GPT api failed")
      return;
    }

    console.log(gptResults.choices[0]?.[0]?.message?.content)
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")

    const promiseArray = gptMovies.map((movie) => searchInTMDB(movie))

    const tmdbResults = await Promise.all(promiseArray)

    dispatch(addGptMovieResult({movieNames : gptMovies, movieResults : tmdbResults}))
  }

  return (
    <div className="pt-[40%] md:pt-[15%] flex justify-center">
      <form className="w-full md:w-1/2 grid grid-cols-9" onSubmit={(e) => e.preventDefault()}>
        <input ref = {searchText}
        type="text" className="p-3 m-1 col-span-7 md:col-span-6 bg-black rounded-lg text-white" placeholder= {lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-2 md:col-span-3 py-2 m-2 bg-red-700 text-white rounded-lg'
        onClick={handleGptBarButtonClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar