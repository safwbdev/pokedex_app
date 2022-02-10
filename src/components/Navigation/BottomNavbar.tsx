import React, { FC } from 'react';
import { FaHome } from "react-icons/fa";
import { DiModernizr } from "react-icons/di";
import { Link } from 'react-router-dom';
import { BOTTOM_NAV_HOME, BOTTOM_NAV_MODE } from '../../constants/lang';
import {NavProps} from "./../../constants/types"

const BottomNavbar:FC<NavProps> = ({mode, toggleSwitch}) => (
    <div className="w-full">
        {/* <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
        <section id="bottom-navigation" className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-red-600 shadow"> 
            <div id="tabs" className="flex justify-between">
                <div className="bottom-nav-btn w-full text-white focus:text-yellow-500 hover:text-yellow-500 justify-center inline-block text-center pt-2 pb-1">
                    <Link to="/">
                        <FaHome />
                        <span className="tab tab-home block text-xs">{BOTTOM_NAV_HOME}</span>
                    </Link>
                </div>
                <div 
                    onClick={()=>toggleSwitch(mode)}
                    className={`bottom-nav-btn w-full ${mode ? "text-yellow-500" : "text-white"} justify-center inline-block text-center pt-2 pb-1`}>
                    <DiModernizr />
                    <span className="tab tab-account block text-xs">{BOTTOM_NAV_MODE}</span>
                </div>
            </div>
        </section>
    </div>);


export default BottomNavbar;
