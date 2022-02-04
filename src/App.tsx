import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import { typeColors } from './constants/typeColors';
import { getPokemon } from './redux/actions/pokeActions';
import { rootStore } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("pikachu");
  const pokemonState = useSelector((state: rootStore) => state.pokemon);

  const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setPokemonName(event.target.value);
  }
  const handleSubmit =()=>{
    dispatch(getPokemon(pokemonName))
  }

  const trimName =(name:string):string=>{
    return name.replace("-"," ");
  }

  const getHeight =(height:any):string=>{
    return `${height/10} m`;
  }
  const getWeight =(weight:any):string=>{
    return `${weight/10} kg`;
  }
  const getBG =(getType:string):string=>{
    let getColor = ''
    typeColors.map(({type, color})=>{
      if ( getType === type){
        getColor = color;
      }
    })
    return getColor
  }

  const calculateStat =(getStat:number):number=>{
    return (getStat * 50) /100;
  }

  const getStat = (statName:string, statPercent:number) =>(
    <div className='flex '>
      <div className={`w-1/3 text-right px-2 capitalize justify-center`}>
        {statName}
      </div>
      <div className='w-2/3 px-3'>
        <div className="w-full bg-gray-200">
          <div 
            className="bg-blue-600 text-base font-medium text-blue-100 text-center p-0.5 leading-none" 
            style={{width: `${calculateStat(statPercent)}%`}}>
              {statPercent}
          </div>
        </div>
      </div>
    </div>
  )

  const { pokemon } = pokemonState
  
  return (
    <div className="App">
      <Navbar />
      <div className='flex items-center p-2'>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" onChange={handleChange} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSubmit}>Search</button>
      </div>
    <div>
    {pokemon && (
      <div>
        <h2 className="text-3xl font-bold capitalize">{pokemon.name} | {`# ${pokemon.order}`}</h2>
        <img src={pokemon.sprites.other.home.front_default} alt='' style={{width:"100%"}}/>
        <div className='font-bold text-l mb-2'>Types</div>
        {pokemon.types.map(({type}) =>{
          return <span className={`${getBG(type.name)} capitalize inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2`} key={type.name}>{type.name}</span>
        })}
        <hr />
        <div className='font-bold text-l mb-2'>Abilities</div>
        {pokemon.abilities.map(({ability}) =>{
          return <span className='capitalize inline-block px-3 py-1' key={ability.name}>{trimName(ability.name)}</span>
        })}
        <hr />
        <div className='font-bold text-l mb-2'>Statistics</div>
        {pokemon.stats.map(({base_stat, stat}) =>{
          return getStat(trimName(stat.name), base_stat)
        })}
        <hr />
        <h5 className='font-bold text-l mb-2'>Other Info</h5>
        <p className='inline-block px-3 py-1'>Height: {getHeight(pokemon.height)}</p>
        <p className='inline-block px-3 py-1'>Weight: {getWeight(pokemon.weight)}</p>
        
      </div>
    )}
     </div>
    </div>
  );
}

export default App;
