import React, { FC, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { PokemonBox } from '.';
import { LOADING_TEXT, SEARCH_POKEMON } from '../constants/lang';

interface Props{
    data:any
}

const AllPokemon:FC<Props> = ({data}) => {
    const [pokemonName, setPokemonName] = useState("");
    const handleChange =(event:ChangeEvent<HTMLInputElement>):void => setPokemonName(event.target.value);

    let collection = data.allPokemon;

    if (pokemonName.length > 0){
        collection = collection.filter((val:any)=>{
            return val.name.match(pokemonName)
        })
    }


    return (<div className='flex flex-wrap py-20'>
                {data.loading && (
                <div className='h-screen flex justify-center items-center w-full'>
                    <h2>{LOADING_TEXT}</h2>
                </div>
                )}
                {data.allPokemon && (
                    <>
                    <div className='w-full p-2'>
                        <input 
                            className='shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            onChange={handleChange} 
                            placeholder={SEARCH_POKEMON} />
                    </div>
                    <div className="flex flex-wrap">
                        {collection.map((val:any, index:any)=>(
                            <div key={index} className='w-1/3 md:w-1/6'>
                                <Link to={`pokemon/${val.id}`}>
                                    <PokemonBox data={val}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>)}
            </div>);
};

export default AllPokemon;
