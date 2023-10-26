import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-96 px-16  absolute text-white br-gradient-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='text-lg py-6 w-2/4'>{overview}</p>
        <div className='my-2 '>
            <button className=' bg-white rounded text-black  px-8 py-2 text-xl hover:bg-opacity-70'>▶️ Play</button>
            <button className=' bg-gray-500 text-white rounded px-6 py-2 mx-4 text-xl hover:bg-opacity-70'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle