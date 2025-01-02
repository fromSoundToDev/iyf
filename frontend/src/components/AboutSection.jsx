import React from "react";
import about_img from "../assets/images/Rectangle 25.png";

export default function AboutSection() {
  return (
    <div className=" flex flex-col justify-center items-center w-5/6 bg-[#acdaa188] py-5 mb-10 space-y-5 mt-10 mx-auto">
      <h1 className="w-3/4 font-semibold text-lg sm:text-xl text-center ">
        Qui somme nous ?
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-2  w-3/4 mx-auto">
        <div className="grid grid-cols-1 gap-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            pariatur, ab laborum eligendi fuga, ducimus, enim atque nam sunt
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            perferendis illo laboriosam, eveniet quidem dignissimos!
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eos repellendus, quidem reprehenderit architecto possimus.
          </p>
        </div>
        <div className="">
          <img src={about_img} alt="" className="" />
        </div>
      </div>
      <div className="w-3/4 font-semibold text-lg sm:text-xl text-center">
        Notre Missions
      </div>
      <div className="grid grid-cols-1  justify-center items-center gap-2  w-3/4 mx-auto">

      <p className="">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos
        repellendus, quidem reprehenderit architecto possimus.{" "}
      </p>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, in! Sed
        voluptatum vel ut incidunt illo assumenda labore vero officiis
        necessitatibus error, aperiam aspernatur saepe ad odit odio, quos eos!
      </p>
      </div>
    </div>
  );
}
