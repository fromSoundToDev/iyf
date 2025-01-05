import React from 'react'
import Header from '../components/Header'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default function Connexion() {
  return (
    <div className='h-screen '>
      <Header/>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
