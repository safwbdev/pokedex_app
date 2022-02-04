export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const ADD_POKEMON_CAUGHT = "ADD_POKEMON_CAUGHT";
export const REMOVE_POKEMON_CAUGHT = "REMOVE_POKEMON_CAUGHT";


export type pokemonType = {
    abilities: pokemonAbility[],
    sprites: pokemonSprites,
    stats: pokemonStat[],
    types:pokemonElement[]
    height:pokemonHeight,
    weight:pokemonWeight,
    order:pokemonOrder,
    name:pokemonName,
}

export type caughtPokemon = {
    caught:{
        name:string,
        order:String
    }
}

export type pokemonAbility = {
    ability:{
        name:string,
        url:String
    }
}
export type pokemonElement = {
    type:{
        name:string,
        url:String
    }
}
export type pokemonOrder = {
    order:number
}
export type pokemonName = {
    name:string
}

export type pokemonSprites = {
    front_default:string
    other:{
        home:{
            front_default:string
        }
    }
}
export type pokemonHeight = {
    height:number
}
export type pokemonWeight = {
    weight:number
}

export type pokemonStat = {
    base_stat:number,
    stat:{
        name: string
    }
}

export interface pokemonLoading {
    type:typeof POKEMON_LOADING
}
export interface pokemonFail {
    type:typeof POKEMON_FAIL
}

export interface pokemonSuccess {
    type:typeof POKEMON_SUCCESS,
    payload: pokemonType
}


export type pokemonDispatchTypes = pokemonLoading | pokemonFail | pokemonSuccess
