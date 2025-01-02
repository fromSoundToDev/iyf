import React from 'react'

export default function BtnComponent({btnText, btnStyle}) {
  return (
    <div className='w-1/4 '>
        <button className={btnStyle}>{btnText}</button>
    </div>
  )
}
