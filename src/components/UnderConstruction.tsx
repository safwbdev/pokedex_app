import React, { FC } from 'react';
import { COMING_SOON } from '../constants/lang';
import {PropsE} from "./../constants/types";

const UnderConstruction:FC<PropsE> = ({title}) => ( 
  <div className="flex flex-wrap pt-20 justify-center items-center h-screen">
    {title} <br />
    {COMING_SOON}
  </div>
)

export default UnderConstruction;
