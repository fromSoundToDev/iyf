import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center h-4/5 items-center w-full sm:w-3/4 bg-[#74C084] py-5 mb-10 space-y-5 shadow-lg mt-10 mx-auto">
      <form className="bg-white  flex flex-col gap-4  w-5/6 sm:w-1/2  h-1/2 sm:h-3/4  items-center rounded-xl">
        <h1 className=" font-semibold sm:font-bold text-2xl sm:text-3xl pt-3 ">Connexion</h1>
        <label htmlFor="email"></label>
          <input
            type="email "
            name="email"
            id="email"
            placeholder="Email"
            className="focus:outline-none focus:ring-2 focus:ring-[#74C084] w-3/4 p-3 rounded-md border-2 border-gray-200" 
          />
        
        <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="focus:outline-none focus:ring-2 focus:ring-[#74C084] w-3/4 p-3 rounded-md border-2 border-gray-200 "
          />
        
        <button type="button " className="bg-[#84C7AE] mt-2 text-white  hover:opacity-90 disabled:opacity-70 rounded-md font-medium p-2 border-0">Creer Un Compte</button>
        <p className="mb-5">Vous navez pas de compte ? <Link className="text-[#044ca6] font-semibold underline" > Creer un copmte</Link></p>
      </form>
    </div>
  );
}
