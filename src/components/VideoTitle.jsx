import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:pt-[15%] md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-lg md:text-3xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 w-1/2'>{overview}</p>
        <div className='my-3 md:m-0'>
            <button className='bg-white text-black p-1 px-5 md:p-2 md:px-7 rounded hover:bg-opacity-80'>Play</button>
        </div>
    </div>
  )
}

export default VideoTitle 