import React from 'react'
import Header from '../components/Header.jsx'
import HomeCaption from '../components/HomeCaption.jsx'
import GiftHomeSection from '../components/GiftHomeSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import VolonteerSection from '../components/VolonteerSection.jsx'
import Footer from '../components/Footer.jsx'
import AudioSection from '../components/AudioSection.jsx'

export default function Home() {
  return (
    <div className='bg-[#faf9f3]'>
        <Header />
        <HomeCaption />
        <GiftHomeSection/>
        <AboutSection/>
        <VolonteerSection/>
        <AudioSection/>
        <Footer/>
        
    </div>
  )
}
