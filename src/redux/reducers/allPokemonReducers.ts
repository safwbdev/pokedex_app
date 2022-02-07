import { allPokemon, allPokemonDispatchTypes, ALL_POKEMON_FAIL, ALL_POKEMON_LOADING, ALL_POKEMON_SUCCESS } from "../actions/actionTypes";

interface DefaultStateI {
    loading:boolean,
    allPokemon?: allPokemon,
    // caughtPokemon?: caughtPokemon,
}

const defaultState: DefaultStateI = {
    loading:false,
};


const allPokemonReducer =(state: DefaultStateI = defaultState,action: allPokemonDispatchTypes) : DefaultStateI =>{

    switch (action.type) {
        case ALL_POKEMON_FAIL:
            return{
                loading:false
            }
        case ALL_POKEMON_LOADING:
            return{
                loading:true
            }
        case ALL_POKEMON_SUCCESS:
            return{
                loading:false,
                allPokemon:action.payload
            }
        default:
            return state

    
       
    }
}

export default allPokemonReducer