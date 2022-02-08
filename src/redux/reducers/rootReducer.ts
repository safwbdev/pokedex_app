import { combineReducers } from "redux";
import allPokemonReducer from "./allPokemonReducers";
import modeReducer from "./modeReducer";
import nextPokemonReducer from "./nextPokemonReducer";
import pokemonReducer from "./pokemonReducer";
import prevPokemonReducer from "./prevPokemon";


const rootReducer = combineReducers({
    pokemon:pokemonReducer, 
    allPokemon:allPokemonReducer, 
    mode:modeReducer, 
    prevPokemon:prevPokemonReducer,
    nextPokemon:nextPokemonReducer
});

export default rootReducer