import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import { getPokemon } from './redux/actions/pokemonActions';
import { rootStore } from './redux/store';
import TypeSection from './components/typeSection';
import AbilitiesSection from './components/AbilitiesSection';
import OtherInfo from './components/OtherInfo';
import StatSection from './components/StatSection';
import { FaSearch } from 'react-icons/fa';
import { getAllPokemon } from './redux/actions/allPokemonActions';
import PokemonBox from './components/PokemonBox';


function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("charizard");
  // const [allPokemon, setAllPokemon] = useState([]);
  const pokemonState = useSelector((state: rootStore) => state.pokemon);
  const allPokemonState = useSelector((state: rootStore) => state.allPokemon);

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



  const { pokemon } = pokemonState;
  // const { allPokemon } = allPokemonState


    useEffect(() => {
      dispatch(getAllPokemon())

}, []);

  // console.log("test")
  // console.log(allPokemonState)
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

        </div>
        )
      })}

  </div>)}
 
      
    {pokemon && (
      <div className="flex flex-wrap">
        <div className='w-full'>lolololo
        {allPokemonState.allPokemon && allPokemonState.allPokemon.map((val)=>{
<p>lol</p>
      })} 
      </div>
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
