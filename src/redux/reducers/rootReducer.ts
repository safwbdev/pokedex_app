import { combineReducers } from "redux";
import allPokemonReducer from "./allPokemonReducers";
import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({pokemon:pokemonReducer, allPokemon:allPokemonReducer});

export default rootReducer