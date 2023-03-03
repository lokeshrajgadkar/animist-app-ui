import React from "react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-yellow-300 text-4xl font-bold cursor-pointer">
        Animist
      </h1>
      <div className="">
      <form action="" className="relative mx-auto w-max">
        <input placeholder="Search Anime" type="search" 
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-neutral-400 pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        <svg xmlns="http://www.w3.org/TR/SVG" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
    </div>
    </div>
  );
};

export default Nav;
