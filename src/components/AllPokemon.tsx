import React from 'react';
import { Link } from 'react-router-dom';
import { PokemonBox } from '.';

const AllPokemon = ({data}:any) => {


    return (<div className='flex flex-wrap pt-20'>
                {data.loading && (
                <div className='h-screen flex justify-center items-center w-full'>
                <h2>Loading...</h2></div>
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
