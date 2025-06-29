"use client"

import Link from "next/link";
import { use, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { HiMenu, HiX } from 'react-icons/hi';


export const Navbar = () => {

  const[menuOpen, setMenuOpen] = useState(false);


  return (
  <nav className="flex items-center justify-between w-full mx-auto bg-blue-100 text-black text-xl py-4 px-6  md:px-12 lg:px-24 ">

        <div className="flex items-center">
          <Link href="/">Sabeel Al-Nur</Link>
        </div>  

        <div
          // className={`
          //   absolute left-0 w-full px-5 flex items-center justify-center
          //   transition-all duration-300 ease-in-out
          //   md:static md:w-auto md:min-h-fit
          //   ${menuOpen
          //     ? 'top-0 opacity-100 pointer-events-auto bg-gradient-to-t from-blue-100 to-white min-h-full mx-auto' 
          //     : 'top-0 opacity-0 pointer-events-none scale-95'} 
          //   md:bg-transparent md:opacity-100 md:pointer-events-auto
          // `}

          className={`absolute left-0 w-full px-5 flex flex-col items-center justify-center
              transition-all duration-300 ease-in-out
              md:static md:w-auto md:min-h-fit
              ${menuOpen 
                ? 'top-0 bg-gradient-to-t from-blue-100 to-white min-h-full mx-auto' 
                : 'top-[-100vh]'} 
              md:bg-transparent`}               
        >

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-3xl md:hidden"
              aria-label="Close menu"
            >
              <HiX />
            </button>

          <ul className="flex flex-col gap-8 md:flex-row md:items-center md:gap-6">
            <li><Link className="hover:text-gray-500" href="/">Work</Link></li>
            <li><Link className="hover:text-gray-500" href="/">About</Link></li>
            <li><Link className="hover:text-gray-500" href="/">Contact</Link></li>
          </ul>

          <div className="absolute flex bottom-[8%] items-center gap-4 md:static">
            <a href="" target="_blank" rel="noopener noreferrer"
            className=" bottom-1 md:hidden"><FaInstagram/></a>
            <a href="" target="_blank" rel="noopener noreferrer"
            className="md:hidden"><FaTiktok/></a>
          </div>

        </div>

        <div className="flex items-center gap-4">
          <a href="" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-block"><FaInstagram/></a>
            <a href="" target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-block"><FaTiktok/></a>
          
          <button 
            className="text-3xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)} 
            aria-label="Toggle Menu"
          >{ menuOpen? <HiX/> : <HiMenu /> } </button>
        </div>

        
  </nav>

  
  );
}