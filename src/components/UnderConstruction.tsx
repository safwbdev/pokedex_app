import React, { FC } from 'react';
import { COMING_SOON } from '../constants/lang';

interface Props{
  title:string
}

const UnderConstruction:FC<Props> = ({title}) => {
  return <div className="flex flex-wrap pt-20 justify-center items-center h-screen">
            {title} <br />
            {COMING_SOON}
          </div>;
};

export default UnderConstruction;
