import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AbilitiesSection, OtherInfo, StatSection, TypeSection } from '..';
import { rootStore } from './../../redux/store';
import { getPokemon } from './../../redux/actions/pokemonActions';

const Pokemon:FC = () => {
    
    const { id } = useParams();

    const dispatch = useDispatch();
    const pokemonState = useSelector((state: rootStore) => state.pokemon);
    const mode = useSelector((state: rootStore) => state.mode);
    
    const getOrderNo =(n:any):string=> {
        let len = 3 - (''+n).length;
        let fullNo = (len > 0 ? new Array(++len).join('0') : '') + n
        return `# ${fullNo}`
    }
    
    useEffect(() => {
        dispatch(getPokemon(id!))
    }, [id, dispatch]);
    
    const { pokemon } = pokemonState;
    
    return (<div className="flex flex-wrap py-20">
                {pokemon && (
                    <>
                        <div className='w-full md:w-1/4'>
                            <img src={mode.classicMode ? pokemon.sprites.front_default : pokemon.sprites.other.home.front_default} style={{width:"100%"}} alt={pokemon.name.toString()} />
                            {/* <img src={pokemon.sprites.other.home.front_default} style={{width:"100%"}} alt={pokemon.name.toString()} /> */}
                        </div>
                        <div className='w-full'>
                            <h2 className="text-3xl font-bold capitalize">{getOrderNo(pokemon.id)} | {pokemon.name}</h2>
                        </div>
                        <div className='w-full md:w-1/5'>
                            <TypeSection data={pokemon.types}/>
                            <AbilitiesSection data={pokemon.abilities}/>
                            <OtherInfo weight={pokemon.weight}  height={pokemon.height} />
                        </div>
                        <div className='w-full md:w-1/2'>
                            <StatSection data={pokemon.stats} />
                        </div> 
                    </>
                )}
            </div>);
};

export default Pokemon;
