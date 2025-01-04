import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

export default function ContactComponent() {
  return (
    <div className='w-5/6 h-auto  mx-auto mt-10 bg-[#a5c5ec64] p-4 my-5 grid grid-cols-1 sm:grid-cols-12 shadow-lg gap-4'>

        <div className="cols-span-12 sm:col-span-5 flex flex-col justify-between bg-[#044cA6] text-white p-7 rounded-lg ">
            <h1 className='text-2xl font-semibold mt-5'>Contact information</h1>
            <div className="flex flex-col gap-9  mb-16">
                <p className="flex gap-5  items-center "><FaPhone/> +228 07 07 07</p>
                <p className="flex gap-5  items-center "><FaEnvelope/> contact@iyftogo.org</p>
                <p className="flex gap-5  items-center "><FaMapMarkedAlt/>lome Togo</p>
            </div>
        </div>
        <form className='bg-[#FAF9F3]  grid grid-cols-1  md:grid-cols-2 p-12 rounded-lg cols-span-12 sm:col-span-7  gap-4'>
          <div className="space-y-10 col-span-2 md:col-span-1">
            <label htmlFor="name" className='block'>Name  
            <input type="text" name="name" id="name" className='w-full p-2 outline-none border-b-2 bg-[#FAF9F3] border-black' />
            </label>
            <label htmlFor="email" className='block'>Email  
            <input type="email" name="email" id="email" className='w-full p-2 outline-none border-b-2 bg-[#FAF9F3] border-black' />
            </label>
          
          </div>

          <div className=" space-y-10 col-span-2 md:col-span-1">   
          <label htmlFor="prenom" className='block'>Prenom  
            <input type="text" name="prenom" id="prenom" className='w-full p-2 outline-none border-b-2 bg-[#FAF9F3] border-black' />
            </label>
            <label htmlFor="phone" className='block'>Phone Number  
            <input type="number" name="phone" id="phone" className='w-full p-2 outline-none border-b-2 bg-[#FAF9F3] border-black' />
            </label>
            
          </div>
          <div className=" col-span-2 ">
            <label htmlFor="message" className='block'>Message  
            <textarea name="message" id="message" className='w-full p-2 outline-none border-b-2 bg-[#FAF9F3] border-black' />
            </label>
            <div className="flex justify-end">
            <button type="button " className='bg-[#044cA6] mt-5 text-white font-normal px-6 py-2 rounded-md hover:bg-[#74c463] active:opacity-70 '>Envoyer</button>
            </div>
          </div>
        </form>


       
       

    </div>
  )
}
