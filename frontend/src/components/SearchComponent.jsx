import React from "react";
import conferenceImage from "../assets/images/conference.png";

export default function SearchComponent() {
  return (
   
    <div>
    <div className="flex  justify-end items-center gap-10 p-4 my-5 ">
      <h1 className="text-base sm:text-xl font-semibold text-[#]">Conference / Seminaire</h1>
      <div className="">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <img src={conferenceImage} alt="" className="p-4 " />
    </div>
    </div>

   
  );
}
