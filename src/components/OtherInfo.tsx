import React from 'react';
import {FaWeightHanging, FaRulerVertical} from "react-icons/fa"

const OtherInfo = (data:any) => {

    const getHeight =(height:any):string=> `${height/10} m`;
    
    const getWeight =(weight:any):string=> `${weight/10} kg`;
  
  return (
      <>
    <h5 className='font-bold text-l mb-2'>Other Info</h5>
    <p className='inline-block px-3 py-1'><FaRulerVertical /> {getHeight(data.height)}</p>
    <p className='inline-block px-3 py-1'><FaWeightHanging /> {getWeight(data.weight)}</p>
    <hr />
    </>
  )
};

export default OtherInfo;
