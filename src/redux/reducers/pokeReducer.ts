import { caughtPokemon, pokemonDispatchTypes, pokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../actions/actionTypes";

interface DefaultStateI {
    loading:boolean,
    pokemon?: pokemonType,
    caughtPokemon?: caughtPokemon,
}

const defaultState: DefaultStateI = {
    loading:false,
};


const pokemonReducer =(state: DefaultStateI = defaultState,action: pokemonDispatchTypes) : DefaultStateI =>{

    switch (action.type) {
        case POKEMON_FAIL:
            return{
                loading:false
            }
        case POKEMON_LOADING:
            return{
                loading:true
            }
        case POKEMON_SUCCESS:
            return{
                loading:false,
                pokemon:action.payload
            }
            default:
                return state

    
       
    }
}

export default pokemonReducer