import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-9" >
        <input type="text" className="p-3 m-1 col-span-6 bg-black rounded-lg text-white" placeholder= {lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 p-3 m-2 bg-red-700 text-white rounded-lg'>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar