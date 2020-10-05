import {SET_POKEMON, ADD_POKEMON, SET_DETAIL, DELETE_POKEMON} from '../action-type'

const initialState = {
    pokemon : [],
    detail : null
} 

function reducer(state = initialState, action) {
    if(action.type === SET_POKEMON) {
        return {
            ...state,
            pokemon: action.payload,
        }
    }
    if(action.type === ADD_POKEMON) {
        return {
            ...state,
            pokemon: state.pokemon.concat(action.payload)
        }
    }
    if(action.type === SET_DETAIL) {
        return {
            ...state,
            detail: action.payload
        }
    }
    if(action.type === DELETE_POKEMON) {
        return {
            ...state,
            pokemon: state.pokemon.filter((pok) => pok.id !== action.payload)
        }
    }
    return state
}

export default reducer