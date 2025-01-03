 import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer'
import SearchComponent from '../components/SearchComponent.jsx'
import AudioSection from '../components/AudioSection.jsx'
 
 export default function Conference() {
   return (
     <div>
      <Header/>
      <SearchComponent/>
      <AudioSection/>
      <Footer/>
     </div>
   )
 }
 