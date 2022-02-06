import React from 'react';

const PokemonBox = ({data}:any) => {

    const trimName =(name:string):string=> name.replace("-"," ");

    return (
    <div className="m-1">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={data.sprites.other.home.front_default} alt={data.name} />
            <div className="px-6 py-4">
                <div className="capitalize font-bold text-xs mb-2">{trimName(data.name)}</div>
            </div>
        </div>
    </div>);
};

export default PokemonBox;
