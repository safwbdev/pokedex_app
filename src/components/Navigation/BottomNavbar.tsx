import React from 'react';
import { FaHome, FaSearch } from "react-icons/fa";
// import { MdOutlineCatchingPokemon } from "react-icons/md";
import { DiModernizr } from "react-icons/di";
import { Link } from 'react-router-dom';
import { toggleMode } from '../../redux/actions/modeAction';
import { useDispatch, useSelector } from 'react-redux';
import { rootStore } from '../../redux/store';

const BottomNavbar = () => {
    const mode = useSelector((state: rootStore) => state.mode);
    const dispatch = useDispatch()
    const toggleSwitch = () => dispatch(toggleMode(mode.classicMode));

  return (
    <div className="w-full h-screen">
        {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
        <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> 
            <div id="tabs" className="flex justify-between">
                <div className="bottom-nav-btn w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-2 pb-1">
                    <Link to="/">
                        <FaHome />
                        <span className="tab tab-home block text-xs">Home</span>
                    </Link>
                </div>
                {/* <div className="bottom-nav-btn w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-2 pb-1">
                    <Link to="/caught">
                        <MdOutlineCatchingPokemon />
                        <span className="tab tab-whishlist block text-xs">Caught</span>
                    </Link>
                </div> */}
                <div className="bottom-nav-btn w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-2 pb-1">
                    <Link to="/search">
                        <FaSearch />
                        <span className="tab tab-account block text-xs">Search</span>
                    </Link>
                </div>
                <div 
                    onClick={toggleSwitch}
                    className="bottom-nav-btn w-full focus:text-red-500 hover:text-red-500 justify-center inline-block text-center pt-2 pb-1">
                    <DiModernizr />
                    <span className="tab tab-account block text-xs">Mode</span>
                </div>
            </div>
        </section>
    </div>);
};

export default BottomNavbar;
