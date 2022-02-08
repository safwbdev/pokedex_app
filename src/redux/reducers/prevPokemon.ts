import { pokemonDispatchTypesPrev, pokemonTypeSimplified, POKEMON_FAIL, POKEMON_SUCCESS_PREV } from "../actions/actionTypes";

interface DefaultStateI {
    loading:boolean,
    prevPokemon?: pokemonTypeSimplified,
}

const defaultState: DefaultStateI = {
    loading:false,
};

const prevPokemonReducer =(state: DefaultStateI = defaultState, action: pokemonDispatchTypesPrev) : DefaultStateI =>{

    switch (action.type) {
        case POKEMON_FAIL:
            return{
                loading:false
            }
            case POKEMON_SUCCESS_PREV:
                return{
                loading:false,
                prevPokemon:action.payload
            }
        default:
            return state

    
       
    }
}

export default prevPokemonReducer