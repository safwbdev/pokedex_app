import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AbilitiesSection, OtherInfo, StatSection, TypeSection } from '..';
import { rootStore } from './../../redux/store';
import { getNextPokemon, getPokemon, getPrevPokemon } from './../../redux/actions/pokemonActions';
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai"
const Pokemon:FC = () => {
    
    const { id } = useParams();

    const dispatch = useDispatch();
    const pokemonState = useSelector((state: rootStore) => state.pokemon);
    const mode = useSelector((state: rootStore) => state.mode);
    const nextPokemonState = useSelector((state: rootStore) => state.nextPokemon);
    const prevPokemonState = useSelector((state: rootStore) => state.prevPokemon);
    const trimName =(name:string):string=> name.replace("-"," ");
    
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

    // console.log("prev")
    // console.log(prevPokemon)
    // console.log("next")
    // console.log(nextPokemon)
    
    return (<div className="flex flex-wrap py-20">
                {pokemon && (
                    <>
                        <div className='w-full md:w-1/4'>
                            <img src={mode.classicMode ? pokemon.sprites.front_default : pokemon.sprites.other.home.front_default} style={{width:"100%"}} alt={pokemon.name.toString()} />
                            {/* <img src={pokemon.sprites.other.home.front_default} style={{width:"100%"}} alt={pokemon.name.toString()} /> */}
                        </div>
                        <div className='w-full'>
                            <h2 className="text-3xl font-bold capitalize">{getOrderNo(pokemon.id)} | {pokemon && trimName(pokemon.name.toString())}</h2>
                        </div>
                        <div className='w-full md:w-1/5'>
                            <TypeSection data={pokemon.types}/>
                            <AbilitiesSection data={pokemon.abilities}/>
                            <OtherInfo weight={pokemon.weight}  height={pokemon.height} />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <StatSection data={pokemon.stats} />
                        </div> 
                        { prevPokemon && (
                        <div className='w-1/2'>
                            <Link to={`/pokemon/${prevPokemon.id}`}>
                                <div className='flex items-center justify-around'>
                                    <AiFillCaretLeft />
                                    <span className='capitalize'>{prevPokemon && trimName(prevPokemon?.name.toString())}</span>
                                </div>
                            </Link>
                        </div>
                        )}
                        {nextPokemon && (
                            <div className='w-1/2'>
                                <Link to={`/pokemon/${nextPokemon.id}`}>
                                    <div className='flex items-center justify-around'>
                                        <span className='capitalize'>{nextPokemon && trimName(nextPokemon?.name.toString())}</span><AiFillCaretRight />
                                    </div>
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>);
};

export default Pokemon;
