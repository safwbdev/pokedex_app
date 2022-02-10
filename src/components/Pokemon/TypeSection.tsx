import { PropsD } from "./../../constants/types"
import { FC } from 'react';
import { POKEMON_TYPES } from '../../constants/lang';
import { typeColors } from '../../constants/typeColors';;

const TypeSection:FC<PropsD> = (data) => {
    const getBG =(getType:string):string=>{
        let getColor = '';
        typeColors.map(({type, color})=>{
          if ( getType === type){
            getColor = color;
          }
          return null;
        })
    return getColor
    }   
    
  return (
    <>
        <div className='font-bold text-l mb-2 mt-2'>{POKEMON_TYPES}</div>
        <div className='mb-4'>
            {data.data.map((val:any) =>(
              <span  
                key={val.type.name}
                className={`${getBG(val.type.name)} capitalize inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`} >
                {val.type.name}
              </span>
            ))}
            </div>
        <hr />
        </>
    );
};

export default TypeSection;
