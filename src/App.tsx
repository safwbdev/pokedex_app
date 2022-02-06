import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {Navbar,Pokemon,PokemonBox} from './components';
import { getPokemon } from './redux/actions/pokemonActions';
import { rootStore } from './redux/store';
import { FaSearch } from 'react-icons/fa';
import { getAllPokemon } from './redux/actions/allPokemonActions';
// import PokemonBox from './components/PokemonBox';


function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("charizard");
  const pokemonState = useSelector((state: rootStore) => state.pokemon);
  const allPokemonState = useSelector((state: rootStore) => state.allPokemon);

  const handleChange =(event:ChangeEvent<HTMLInputElement>):void => setPokemonName(event.target.value);
  const handleSubmit =():void=>{
    dispatch(getPokemon(pokemonName))
  }

  useEffect(() => {
    dispatch(getAllPokemon())
  }, []);
  
  const { pokemon } = pokemonState;

  return (
    <div className="App">
      <Navbar />
      <div className='flex items-center p-2'>
        <input className='shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" onChange={handleChange} />
        <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-r focus:outline-none focus:shadow-outline' onClick={handleSubmit}><FaSearch/></button>
      </div>
    <div>

    {allPokemonState && (
      <div className="flex flex-wrap">
          {allPokemonState.allPokemon?.map((val,index)=>{
            return(
              <div key={index} className='w-1/3'>
                <PokemonBox data={val}/>
              </div>)
          })}

      </div>)
    }

    {pokemon && ( <Pokemon data={pokemon}/>)}     
     </div>
    </div>
  );
}

export default App;
