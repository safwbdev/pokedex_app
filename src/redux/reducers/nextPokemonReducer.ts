import { pokemonDispatchTypesNext, pokemonTypeSimplified, POKEMON_FAIL, POKEMON_SUCCESS_NEXT } from "../actions/actionTypes";

interface DefaultStateI {
    loading:boolean,
    nextPokemon?: pokemonTypeSimplified,
}

const defaultState: DefaultStateI = {
    loading:false,
};

const nextPokemonReducer =(state: DefaultStateI = defaultState, action: pokemonDispatchTypesNext) : DefaultStateI =>{

    switch (action.type) {
        case POKEMON_FAIL:
            return{
                loading:false
            }
            case POKEMON_SUCCESS_NEXT:
                return{
                loading:false,
                nextPokemon:action.payload
            }
        default:
            return state

    
       
    }
}

export default nextPokemonReducer