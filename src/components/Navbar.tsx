import React from 'react';
import { MdOutlineCatchingPokemon } from "react-icons/md"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<nav className='w-full fixed'>
  <div className="flex items-center justify-center flex-wrap bg-red-600 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className='text-xl pr-1'>
                <MdOutlineCatchingPokemon />
              </span>
              <span className="font-semibold text-xl tracking-tight ">
                <Link to="/">
                Pokedex
                </Link>
              </span>
            </div>
            </div>
          </nav>);
};

export default Navbar;
