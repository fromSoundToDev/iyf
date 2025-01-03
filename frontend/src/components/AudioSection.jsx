import React from 'react'
import AudioComponent from './AudioComponent'

export default function AudioSection() {
  return (
    <div className='bg-[#a5c5ec64] w-full p-4 h-auto my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <AudioComponent/>
       <AudioComponent/>
       <AudioComponent/>
       <AudioComponent/>
       <AudioComponent/>
       <AudioComponent/>
    </div>
  )
}
