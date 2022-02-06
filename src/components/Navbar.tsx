import React from 'react';
import {MdOutlineCatchingPokemon} from "react-icons/md"

const Navbar = () => {
  return (<nav className="flex items-center justify-between flex-wrap bg-red-600 p-6">

  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className='text-xl pr-1'>

  <MdOutlineCatchingPokemon />
    </span>
<span className="font-semibold text-xl tracking-tight ">
  Pokedex</span>
  </div>
  
</nav>);
};

export default Navbar;
