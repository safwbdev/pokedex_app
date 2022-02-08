import axios from "axios"
import { Dispatch } from "redux"
import { pokemonDispatchTypes, pokemonDispatchTypesNext, pokemonDispatchTypesPrev, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, POKEMON_SUCCESS_NEXT, POKEMON_SUCCESS_PREV } from "./actionTypes"

export const getPokemon = (pokemon:string) => async (dispatch:Dispatch<pokemonDispatchTypes>) =>{
    try {
        dispatch({ type: POKEMON_LOADING})
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        
        dispatch({type:POKEMON_SUCCESS, payload: res.data})
    } catch (error) {
        dispatch({type:POKEMON_FAIL})
    }
}
export const getNextPokemon = (pokemonNo:number) => async (dispatch:Dispatch<pokemonDispatchTypesNext>) =>{
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNo + 1}`)
        
        dispatch({type:POKEMON_SUCCESS_NEXT, payload: res.data})
    } catch (error) {
        dispatch({type:POKEMON_FAIL})
    }
}
export const getPrevPokemon = (pokemonNo:number) => async (dispatch:Dispatch<pokemonDispatchTypesPrev>) =>{
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNo - 1}`)
        
        dispatch({type:POKEMON_SUCCESS_PREV, payload: res.data})
    } catch (error) {
        dispatch({type:POKEMON_FAIL})
    }
}
