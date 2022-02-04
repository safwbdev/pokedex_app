import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPokemon } from './redux/actions/pokeActions';
import { rootStore } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: rootStore) => state.pokemon);

  const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
    setPokemonName(event.target.value);
  }
  const handleSubmit =()=>{
    dispatch(getPokemon(pokemonName))
  }

  const abilityName =(name:string)=>{
    return name.replace("-"," ");
  }

  const getHeight =(height:any)=>{
    return `${height/10} m`;
  }
  const getWeight =(weight:any)=>{
    return `${weight/10} kg`;
  }

  const { pokemon } = pokemonState
  
  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      {/* <button onClick={handleSubmit}>Search</button> */}
    <div>
    {pokemon && (
      <div>
        <h2>{pokemon.name} | {`# ${pokemon.order}`}</h2>
        <img src={pokemon.sprites.other.home.front_default} alt='' style={{width:"100%"}}/>
        <h5>Abilities</h5>
        {pokemon.abilities.map(({ability}) =>{
          return <p key={ability.name}>{abilityName(ability.name)}</p>
        })}
        <hr />
        <h5>Statistics</h5>
        {pokemon.stats.map(({base_stat, stat}) =>{
          return <p key={stat.name}>{stat.name} | {base_stat}</p>
        })}
        <hr />
        <h5>Type</h5>
        {pokemon.types.map(({type}) =>{
          return <p key={type.name}>{type.name}</p>
        })}
        <hr />
        <h5>Other Info</h5>
        <p>Height: {getHeight(pokemon.height)}</p>
        <p>Weight: {getWeight(pokemon.weight)}</p>
        
      </div>
    )}
     </div>
    </div>
  );
}

export default App;
