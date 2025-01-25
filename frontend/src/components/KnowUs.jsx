import React from "react";
import aboutImage from "../assets/images/about.jpg";

export default function KnowUs() {
  return (
    <div className="">
      <div className="p-2 sm:p-12  ">
        <div className=" p-2 flex flex-row  items-center">
          <div className="w-28 min-w-12  h-[1px] bg-black"></div>
          <h1 className="p-2 uppercase text-[12px] font-bold sm:text-[14px]">
            know about us
          </h1>
        </div>
        <div className="grid grid-cols-5  w-full space-y-4 ">
          <div className="col-span-5 sm:col-span-3 p-2  justify-items-end  ">
            <p className="text-2xl sm:text-3xl font-extrabold  uppercase tracking-wide leading-4 w-5/6  ">
              we are a non-governmental organization
            </p>
          </div>
          <div className="col-span-5 sm:col-span-2 p-2">
            <p className=" p-2 text-lg font-medium">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="p-2 text-bse text-gray-500 font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Suspendisse varius enim elementum tristique.
            </p>
          </div>
          <div className=" col-span-5   ">
            <img src={aboutImage} alt="" className="rounded-2xl  " />
          </div>
        </div>
      </div>
      <div className=" h-[500px] bg-[#74C084] "></div>
    </div>
  );
}
