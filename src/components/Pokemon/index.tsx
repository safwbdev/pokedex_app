import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AbilitiesSection, OtherInfo, StatSection, TypeSection } from '..';
import { rootStore } from './../../redux/store';
import { getNextPokemon, getPokemon, getPrevPokemon } from './../../redux/actions/pokemonActions';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
import { PropsC } from "./../../constants/types"

const Pokemon:FC<PropsC> = ({mode, trimName}) => {
    
    const { id } = useParams();

    const dispatch = useDispatch();
    const pokemonState = useSelector((state: rootStore) => state.pokemon);
    const nextPokemonState = useSelector((state: rootStore) => state.nextPokemon);
    const prevPokemonState = useSelector((state: rootStore) => state.prevPokemon);
    
    const getOrderNo =(n:any):string=> {
        let len = 3 - (''+n).length;
        let fullNo = (len > 0 ? new Array(++len).join('0') : '') + n
        return `# ${fullNo}`
    }
    
    useEffect(() => {
        dispatch(getPokemon(id!))
        dispatch(getNextPokemon(parseInt(id!)))
        dispatch(getPrevPokemon(parseInt(id!)))
    }, [id, dispatch]);
    
    const { pokemon } = pokemonState;
    const { nextPokemon } = nextPokemonState;
    const { prevPokemon } = prevPokemonState;
    
    return (<div className="flex flex-wrap py-20">
                {pokemon && (
                    <>
                        <div className='w-full md:w-1/4'>
                            <img src={mode ? pokemon.sprites.front_default : pokemon.sprites.other.home.front_default} style={{width:"100%"}} alt={pokemon.name.toString()} />
                        </div>
                        <div className='w-full sm:hidden'>
                            <h2 className="text-3xl font-bold capitalize">{getOrderNo(pokemon.id)} | {pokemon && trimName(pokemon.name.toString())}</h2>
                        </div>
                        <div className='w-full md:w-3/4'>
                            <div className="flex flex-wrap justify-center">
                            <div className='w-full md:w-1/3'>
                                <TypeSection data={pokemon.types}/>
                                <AbilitiesSection data={pokemon.abilities} trimName={trimName} />
                                <OtherInfo weight={pokemon.weight}  height={pokemon.height} />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <StatSection data={pokemon.stats} trimName={trimName} />
                            </div> 
                            </div> 
                        </div> 
                        <div className="w-full">
                            <div className="flex flex-wrap justify-center">
                                { prevPokemon && (
                                    <div className='w-1/2 md:w-1/3 mt-4'>
                                        {Number(pokemon.id) >=1 && (
                                            <Link to={`/pokemon/${prevPokemon.id}`}>
                                                <div className='flex items-center justify-around bg-red-600 text-white font-semibold py-2 px-4 border rounded mx-4'>
                                                    <AiFillCaretLeft />
                                                    <span className='capitalize'>{prevPokemon && trimName(prevPokemon?.name.toString())}</span>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                )}
                                {nextPokemon && (
                                    <div className='w-1/2 md:w-1/3 mt-4'>
                                        {Number(pokemon.id) >=1 && (
                                            <Link to={`/pokemon/${nextPokemon.id}`}>
                                                <div className='flex items-center justify-around bg-red-600 text-white font-semibold py-2 px-4 border rounded mx-4'>
                                                        <span className='capitalize'>{nextPokemon && trimName(nextPokemon?.name.toString())}</span><AiFillCaretRight />
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>);
};

export default Pokemon;
