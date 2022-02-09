import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PokemonBox } from '.';
import { LOADING_TEXT } from '../constants/lang';

interface Props{
    data:any
}

const AllPokemon:FC<Props> = ({data}) => {


    return (<div className='flex flex-wrap py-20'>
                {data.loading && (
                <div className='h-screen flex justify-center items-center w-full'>
                    <h2>{LOADING_TEXT}</h2>
                </div>
                )}
                {data.allPokemon && (
                    <div className="flex flex-wrap">
                        {data.allPokemon?.map((val:any, index:any)=>{
                            return(
                            <div key={index} className='w-1/3'>
                                <Link to={`pokemon/${val.id}`}>
                                    <PokemonBox data={val}/>
                                </Link>
                            </div>)
                        })}

                    </div>)}
            </div>);
};

export default AllPokemon;
