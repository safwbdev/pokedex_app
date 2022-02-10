import React, { FC } from 'react';
import { MdOutlineCatchingPokemon } from "react-icons/md"
import { DiModernizr } from "react-icons/di"
import { Link } from 'react-router-dom';
import { TOP_NAV_TITLE } from '../../constants/lang';
import { NavProps } from "./../../constants/types"


const TopNavbar:FC<NavProps> = ({mode, toggleSwitch}) => (
  <nav className='w-full fixed'>
    <div className="flex items-center justify-center md:justify-between flex-wrap bg-red-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className='text-xl pr-1 logo-rotate'>
          <MdOutlineCatchingPokemon />
        </span>
        <span className="font-semibold text-xl tracking-tight ">
          <Link to="/">
            {TOP_NAV_TITLE}
          </Link>
        </span>
      </div>
      <div>
        <button 
          className={`hidden sm:flex px-4 py-2 leading-none border rounded  ${mode ? "text-yellow-500 border-yellow-500" : "text-white border-white"} text-base font-semibold mt-4 lg:mt-0`}
          onClick={()=>toggleSwitch(mode)}>
          <DiModernizr /> <span className='ml-2'>{ mode ? "Classic mode" : "Modern mode"}</span>
        </button>
      </div>
    </div>
  </nav>);

export default TopNavbar;
