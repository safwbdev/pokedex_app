import React from 'react';
import {FaWeightHanging, FaRulerVertical} from "react-icons/fa"

const OtherInfo = (data:any) => {

    const getHeight =(height:any):string=> `${height/10} m`;
    
    const getWeight =(weight:any):string=> `${weight/10} kg`;
  
  return (
      <>
        <h5 className='font-bold text-l mb-2 mt-2'>Other Info</h5>
        <div className="flex flex-wrap mb-4">
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaRulerVertical /> <span className='px-1'>{getHeight(data.height)}</span>
          </div>
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaWeightHanging /> <span className='px-1'>{getWeight(data.weight)}</span>
          </div>
        </div>
        <hr />
    </>
  )
};

export default OtherInfo;
