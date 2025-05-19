import React from 'react'

function Empty({ text = '' }) {
  return (
    <div className='flex flex-col justify-center items-center bg-neutral-700 w-full p-2 rounded-[8px] text-sm font-[Inter] leading-[1.3] mt-6 text-white'>
        <p>{text}</p>
    </div>
  )
}

export default Empty