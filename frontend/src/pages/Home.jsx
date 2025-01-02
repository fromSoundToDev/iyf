import React from 'react'
import Header from '../components/Header.jsx'
import HomeCaption from '../components/HomeCaption.jsx'
import GiftHomeSection from '../components/GiftHomeSection.jsx'

export default function Home() {
  return (
    <div className='bg-[#faf9f3]'>
        <Header />
        <HomeCaption />
        <GiftHomeSection/>
        
    </div>
  )
}
