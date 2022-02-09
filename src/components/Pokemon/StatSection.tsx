import React, { FC } from 'react';
import { POKEMON_STATS } from '../../constants/lang';
import { statColors } from '../../constants/statColors';

interface Props{
    data:any
}

const StatSection:FC<Props> = ({data}) => {

    const trimName =(name:string):string=> name.replace("-"," ");

    const calculateStat =(getStat:number):number=> (getStat * 50) /100;

    const getStatColor =(stat:string):string=>{
        let selectedColor =''
        statColors.map((val)=>{
            if(stat === val.name){
                selectedColor = val.color;
                return null
            }
            return null
        })
        return selectedColor
  }

    const getStat = (statName:string, statPercent:number) =>(
        <>
            <div className={`w-1/3 text-right px-1 pb-1 capitalize justify-center text-sm`}>
                {statName}
            </div>
            <div className='w-2/3 px-3'>
                <div className="w-full bg-gray-200">
                    <div 
                        className={`${getStatColor(statName)} text-base font-medium text-white text-center p-0.5 leading-none`} 
                        style={{width: `${calculateStat(statPercent)}%`}}>
                        {statPercent}
                    </div>
                </div>
            </div>
        </>
      )
    
      
    return (
        <>
            <div className='font-bold text-l mb-2 mt-2'>{POKEMON_STATS}</div>
            <div className="mb-4">

            {data.map((val:any) => (
                <div className='flex ' key={val.stat.name}>
                    {getStat(trimName(val.stat.name), val.base_stat)}
                </div>
            ))}
            </div>
            <hr className='sm:hidden' />
        </>
    
  )
};

export default StatSection;
