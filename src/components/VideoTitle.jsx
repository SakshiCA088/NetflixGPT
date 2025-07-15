import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className=''>
            <button className='bg-gray-600/80 text-black p-2 px-7 rounded'>Play</button>
            <button className='mx-2 bg-gray-600/80 text-black p-2 px-3 rounded'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle