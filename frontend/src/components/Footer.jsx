import React from 'react'
import { Link } from 'react-router-dom'
import mobile_logo from '../assets/images/small_logo.png'
import { FaMapMarkerAlt, FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='w-full bg-[#a5c5ec] '>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 place-items-center">
            <div className=""><img src={mobile_logo} alt="" className="w-44" /></div>
            <div className="flex flex-col justify-center items-center place-items-center space-y-2">
                <h1 className='text-md sm:text-xl font-semibold'>Liens utils</h1>
                <div className="flex flex-col place-items-center">
                <Link to="/" className="mx-4 hover:text-[#044ca6]"> Acceuil</Link>
                <Link to="/about" className="mx-4 hover:text-[#044ca6]"> A propos</Link>
                <Link to="/events" className="mx-4 hover:text-[#044ca6]"> Evenements</Link>
                <Link to="/coonferences" className="mx-4 hover:text-[#044ca6]"> Conference/Seminaire</Link>
                <Link to="/gift" className="mx-4 hover:text-[#044ca6]"> Don</Link>
                <Link to="/connexion" className="mx-4 hover:text-[#044ca6]"> Connextion</Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 ">
                <h1 className=" font-semibold text-md sm:text-xl">Contact</h1>
                <div className="">
                <p className="flex  items-center "><FaWhatsapp title="WhatsApp" className=' size-4 text-[#044ca6] mr-2' />+228 07 07 07 07 07</p>
                <p className="flex  items-center "><FaPhone title="Phone" className='size-4 text-[#044ca6] mr-2    ' />+228 07 07 07 07 07</p>
                <p className="flex  items-center "><FaEnvelope title='Mail' className='size-4 text-[#044ca6] mr-2  '/> contactiyftogo.org</p>
                <p className="flex  items-center "> <FaMapMarkerAlt title='' className='size-4 text-[#044ca6] mr-2 '/> Lome, Togo</p>
                <div className=" flex justify-between w-full p-2 mt-2">
                    <a href="http://"><FaInstagram title='' className='size-6 text-[#044ca6] mr-2   ' /> </a>
                    <a href="http://"><FaFacebook title='' className='size-6 text-[#044ca6] mr-2    ' /> </a>
                    <a href="http://"><FaLinkedin title='' className='size-6 text-[#044ca6] mr-2    ' /> </a>
                </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-center space-y-2 items-center p-2">
            <hr className='w-1/2 h-0.5 border-0 bg-[#044ca6] ' />
            <p className="">© 2025 IYF TOGO. Tous droits | powererd by :<span className="text-[#044ca6]"> <a href="http://">Zero Faute informatics</a></span> </p>
        </div>
    </div>
  )
}
