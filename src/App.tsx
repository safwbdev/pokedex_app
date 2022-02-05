import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import { getPokemon } from './redux/actions/pokeActions';
import { rootStore } from './redux/store';
import TypeSection from './components/typeSection';
import AbilitiesSection from './components/AbilitiesSection';
import OtherInfo from './components/OtherInfo';
import StatSection from './components/StatSection';


function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("charizard");
  const pokemonState = useSelector((state: rootStore) => state.pokemon);

  const handleChange =(event:ChangeEvent<HTMLInputElement>):void=>{
    setPokemonName(event.target.value);
  }
  const handleSubmit =():void=>{
    dispatch(getPokemon(pokemonName))
  }

  const getOrderNo =(n:any)=> {
    let len = 3 - (''+n).length;
    let fullNo = (len > 0 ? new Array(++len).join('0') : '') + n
    return `# ${fullNo}`
  }



  const { pokemon } = pokemonState


  // for (let i=1;i<=150;i++){
  //   console.log(i)
  // }

  
  return (
    <div className="App">
      <Navbar />
      <div className='flex items-center p-2'>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" onChange={handleChange} />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleSubmit}>Search</button>
      </div>
    <div>
    {pokemon && (
      <div className="flex flex-wrap">
        <div className='w-full'>
          <h2 className="text-3xl font-bold capitalize">{getOrderNo(pokemon.id)} | {pokemon.name}</h2>
        </div>
        <div className='w-full md:w-1/4'>
          <img src={pokemon.sprites.other.home.front_default} alt='' style={{width:"100%"}}/>
        </div>
        <div className='w-full md:w-1/5'>
          <TypeSection data={pokemon.types}/>
          <AbilitiesSection data={pokemon.abilities}/>
          <OtherInfo weight={pokemon.weight}  height={pokemon.height} />
        </div>
        <div className='w-full md:w-1/2'>        
          <StatSection data={pokemon.stats} />
        </div>
       
        
      </div>
    )}
     </div>
    </div>
  );
}

export default App;
