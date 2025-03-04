import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center h-4/5 items-center w-full sm:w-3/4 bg-[#74C084] py-5 mb-10 space-y-5 shadow-lg mt-10 mx-auto">
      <form className="bg-white  flex flex-col gap-4  w-5/6 sm:w-1/2  h-3/4 sm:h-5/6  items-center rounded-xl">
        <h1 className=" font-semibold sm:font-bold text-2xl sm:text-3xl pt-3 ">Creer Un Compte</h1>
        <label htmlFor="userame"></label>
          <input
            type="text "
            name="username"
            id="username"
            placeholder="User Name"
            className="focus:outline-none focus:ring-2 focus:ring-[#74C084] w-3/4 p-3 rounded-md border-2 border-gray-200" 
          />
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
        
        <button type="button " className="bg-[#84C7AE] mt-2 text-white  hover:opacity-90 disabled:opacity-70 rounded-md font-medium p-2 border-0">Creer un compte</button>
        <p className="mb-5">Vous avez deja un compte ? <Link className="text-[#044ca6] font-semibold underline" > Connectez-vous</Link></p>
      </form>
    </div>
  );
}
