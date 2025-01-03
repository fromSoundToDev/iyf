import React from "react";
import audiImage from "../assets/images/audioImage.png";
import backwordImage from "../assets/images/backword.png";
import pauseImage from "../assets/images/play button.png";
import forwordImage from "../assets/images/forword.png";
import shareImage from "../assets/images/right-arrow.png";

export default function AudioComponent() {
  return (
    <div className="border-0 bg-[#D9D9D9] w-full h-auto p-4 shadow-lg flex">
      <img src={audiImage} alt="" className=" rounded-md" />
      <div className="grid grid-cols-12">
        <div className=" col-span-10  flex flex-col justify-center items-start gap-2 ml-2">
          <h3 className=" font-semibold ">Theme/title</h3>
          <h5 className="text-sm font-normal">Date</h5>
          <div className=" flex gap-5 justify-center items-center w-full">
            <img src={backwordImage} alt="" className="cursor-pointer shadow-2xl" />
            <img src={pauseImage} alt="" className="cursor-pointer shadow-2xl" />
            <img src={forwordImage} alt="" className="cursor-pointer shadow-2xl" />
            <h4 className="font-medium text-xs">58:00</h4>
          </div>
          <div className="w-full border-[1px] border-black overflow-hidden h-1">
            <div className="bg-[#044ca6] h-1 w-3/4"> </div>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <img src={shareImage} alt="" className=" size-5 cursor-pointer shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
