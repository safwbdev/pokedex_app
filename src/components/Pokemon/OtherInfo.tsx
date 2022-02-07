import React, { FC } from 'react';
import {FaWeightHanging, FaRulerVertical} from "react-icons/fa"

interface Props{
  weight:any,
  height:any
}

const OtherInfo:FC<Props> = (weight, height) => {

    const getHeight =(h:any):string=> `${h/10} m`;
    
    const getWeight =(w:any):string=> `${w/10} kg`;
  
  return (
      <>
        <h5 className='font-bold text-l mb-2 mt-2'>Other Info</h5>
        <div className="flex flex-wrap mb-4">
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaRulerVertical /> <span className='px-1'>Height :  {getHeight(height)}</span>
          </div>
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaWeightHanging /> <span className='px-1'>Weight :  {getWeight(weight)}</span>
          </div>
        </div>
        <hr />
    </>
  )
};

export default OtherInfo;
