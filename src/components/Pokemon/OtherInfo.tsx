import React, { FC } from 'react';
import {FaWeightHanging, FaRulerVertical} from "react-icons/fa"
import { POKEMON_HEIGHT, POKEMON_KILO, POKEMON_METER, POKEMON_WEIGHT } from '../../constants/lang';
import { PropsInfo } from "../../constants/types"

const OtherInfo:FC<PropsInfo> = (data) => {

    const getHeight =(h:number):string => `${h/10} ${POKEMON_METER}`;

    const getWeight =(w:number):string => `${w/10} ${POKEMON_KILO}`;
  
  return (
      <>
        <h5 className='font-bold text-l mb-2 mt-2'>Other Info</h5>
        <div className="flex flex-wrap mb-4">
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaRulerVertical /> <span className='px-1'>{POKEMON_HEIGHT} {getHeight(data.height)}</span>
          </div>
          <div className='w-1/2 flex flex-wrap items-center justify-center'>
            <FaWeightHanging /> <span className='px-1'>{POKEMON_WEIGHT} {getWeight(data.weight)}</span>
          </div>
        </div>
        <hr className='sm:hidden' />
    </>
  )
};

export default OtherInfo;
