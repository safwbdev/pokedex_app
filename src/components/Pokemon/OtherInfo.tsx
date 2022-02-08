import React, { FC } from 'react';
import {FaWeightHanging, FaRulerVertical} from "react-icons/fa"

interface Props{
  height:any,
  weight:any
}

const OtherInfo:FC<Props> = (data) => {

    const getHeight =(h:number):string => `${h/10} m`;

    const getWeight =(w:number):string => `${w/10} kg`;
  
  return (
      <>
        <h5 className='font-bold text-l mb-2 mt-2'>Other Info</h5>
        <div className="flex flex-wrap mb-4">
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaRulerVertical /> <span className='px-1'>Height :  {getHeight(data.height)}</span>
          </div>
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaWeightHanging /> <span className='px-1'>Weight :  {getWeight(data.weight)}</span>
          </div>
        </div>
        <hr />
    </>
  )
};

export default OtherInfo;
