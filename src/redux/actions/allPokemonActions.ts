import axios from "axios"
import { Dispatch } from "redux"
import { allPokemonDispatchTypes, ALL_POKEMON_FAIL, ALL_POKEMON_LOADING, ALL_POKEMON_SUCCESS } from "./actionTypes"

export const getAllPokemon = () => async (dispatch:Dispatch<allPokemonDispatchTypes>) =>{

    try {
        dispatch({ type: ALL_POKEMON_LOADING})
        
        let allPokemon = [];
        
        for (let i=1;i<=151;i++){
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
          allPokemon.push(res.data);
        }
        
        dispatch({type:ALL_POKEMON_SUCCESS, payload: allPokemon})
    } catch (error) {
        dispatch({type:ALL_POKEMON_FAIL})
    }
}