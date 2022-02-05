export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const ALL_POKEMON_LOADING = "ALL_POKEMON_LOADING";
export const ALL_POKEMON_SUCCESS = "ALL_POKEMON_SUCCESS";
export const ALL_POKEMON_FAIL = "ALL_POKEMON_FAIL";
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
    id:pokemonId,
}

export type caughtPokemon = {
    caught:{
        name:string,
        order:String
    }
}

export type allPokemon = {
    allPokemon:{
        name:pokemonName,
        id:pokemonId,
        sprites: pokemonSprites,
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
export type pokemonId = {
    id:number
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

export interface allPokemonLoading {
    type:typeof ALL_POKEMON_LOADING
}
export interface allPokemonFail {
    type:typeof ALL_POKEMON_FAIL
}

export interface allPokemonSuccess {
    type:typeof ALL_POKEMON_SUCCESS,
    payload: pokemonType
}

export type allPokemonDispatchTypes = allPokemonLoading | allPokemonFail | allPokemonSuccess
