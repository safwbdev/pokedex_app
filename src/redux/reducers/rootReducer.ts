import { combineReducers } from "redux";
import pokemonReducer from "./pokeReducer";

const rootReducer = combineReducers({pokemon:pokemonReducer,});

export default rootReducer