import axios from "axios"
import { Dispatch } from "redux"
import { pokemonDispatchTypes, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "./actionTypes"

export const getPokemon = (pokemon:string) => async (dispatch:Dispatch<pokemonDispatchTypes>) =>{
    try {
        dispatch({ type: POKEMON_LOADING})
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        dispatch({type:POKEMON_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type:POKEMON_FAIL})
    }
}
