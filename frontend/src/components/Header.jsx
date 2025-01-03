import React from 'react'
import logo_image from '../assets/images/logo_iyf.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full h-20 bg-[#faf9f3] flex justify-between items-center p-4">
        <div className="">
            <Link to="/" className="">
            <img src={logo_image} alt="iyf logo"  />
            </Link>
        </div>
        <div className="p-2 text-sm sm:text-base ">
            <Link to="/about" className="mx-4 hover:text-[#044ca6]"> A propos</Link>
            <Link to="/events" className="mx-4 hover:text-[#044ca6]">Evenements</Link>
            <Link to="/conferences" className="mx-4 hover:text-[#044ca6]">Conferencre/Seminaire</Link>
            <Link to="/contact" className="mx-4 hover:text-[#044ca6]">Contact</Link>
            <Link to="/gift" className="mx-4 hover:text-[#044ca6]  bg-[#044CA6] text-white fle px-2 py-1 rounded-2xl ">Don</Link>
            <Link to="/connexion" className="mx-4 hover:text-[#044ca6] bg-[#044CA6] text-white fle px-2 py-1 rounded-2xl  ">Connnexion</Link>
        </div>
    </header>
  )
}
