import React, { FC } from 'react';
import { POKEMON_ABILITIES } from '../../constants/lang';
import { PropsB } from "./../../constants/types"

const AbilitiesSection:FC<PropsB> = ({data, trimName }) =>  (
        <>
            <div className='font-bold text-l mb-2 mt-2'>{POKEMON_ABILITIES}</div>
            <div className='mb-4'>
                {data.map((ability:any) =>{
                    return <span 
                                className='capitalize inline-block px-3 py-1' 
                                key={ability.ability.name}>
                                    {trimName(ability.ability.name)}
                            </span>
                })}
            </div>
            <hr />
        </>
    );

export default AbilitiesSection;
