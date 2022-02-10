import React, { FC } from 'react';
import { PropsA } from "./../constants/types"


const PokemonBox:FC<PropsA> = ({data, mode, trimName}) => (
    <div className="m-1">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={mode ? data.sprites.front_default : data.sprites.other.home.front_default} alt={data.name} />
            <div className="px-6 py-4">
                <div className="capitalize font-bold text-xs mb-2">{trimName(data.name)}</div>
            </div>
        </div>
    </div>
);

export default PokemonBox;
