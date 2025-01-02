import React from "react";
import volonteer_img from "../assets/images/volunteer.png";

export default function VolonteerSection() {
  return (
    <div className=" w-full   ">
      <img src={volonteer_img} alt="" className="relative" />
      <div className=" -translate-y-24 mx-auto text-white  w-1/2 h-44  bg-[#2c6ca8] p-4 shadow-xl grid place-items-center gap-2">
        <h1 className="font-semibold text-xl  ">Pourquoi devenir volontaire</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestias,
          dolore delectus quasi quod corporis nobis fugiat accusamus recusandae!
          Est officiis ab dolore, id dolorum laboriosam reprehenderit nobis
          possimus quae?
        </p>
      </div>
    </div>
  );
}
