import React from 'react'
import slide_image from '../assets/images/mobile.png'

export default function HomeCaption() {
  return (
    <>
    <div className="carousel w-full bg-[#faf9f3] relative overflow-hidden">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  <div className="w-full absolute flex justify-around items-center  ">
    <div className="w-72 h-20 bg-[#2c6ca8] -translate-y-11 shadow-xl p-2  ">
       <h2 className="text-white text-sm sm:text-xl text-center font-semibold">Plus de 2000</h2>
       <p className="text-sm text-white text-center mt-2">membres actif reparti dans toute les rigions</p> 
    </div>
    <div className="w-72 h-20 bg-[#2c6ca8] -translate-y-11 shadow-xl  p-2 ">
        <h2 className="text-white text-sm sm:text-xl text-center font-semibold">Plus de 2000</h2>
        <p className="text-sm text-white text-center mt-2">membres actif reparti dans toute les rigions</p>
    </div>
    
  </div>
  
    </>

  )
}