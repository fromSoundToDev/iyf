import React from 'react'
import AudioComponent from './AudioComponent'

export default function AudioSection() {
  return (
    <div className='bg-[#a5c5ec] w-full p-4 h-[300px] my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <AudioComponent/>
    </div>
  )
}
