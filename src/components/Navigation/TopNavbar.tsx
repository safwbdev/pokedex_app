import React, { FC } from 'react';
import { MdOutlineCatchingPokemon } from "react-icons/md"
import { Link } from 'react-router-dom';
import { TOP_NAV_TITLE } from '../../constants/lang';

const TopNavbar:FC = () => {
  return (<nav className='w-full fixed'>
            <div className="flex items-center justify-center flex-wrap bg-red-600 p-6">
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
            </div>
          </nav>);
};

export default TopNavbar;
