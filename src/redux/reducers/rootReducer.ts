import { combineReducers } from "redux";
import allPokemonReducer from "./allPokemonReducers";
import modeReducer from "./modeReducer";
import pokemonReducer from "./pokemonReducer";


const rootReducer = combineReducers({pokemon:pokemonReducer, allPokemon:allPokemonReducer, mode:modeReducer});

export default rootReducer