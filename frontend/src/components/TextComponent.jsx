import React from 'react'

export default function TextComponent({text1, text2}) {
  return (
    <div className='w-3/4 p-2'>
        <div className="">{text1}</div>
        <div className="">{text2}</div>
    </div>
  )
}
