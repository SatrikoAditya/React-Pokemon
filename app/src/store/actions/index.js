import {SET_POKEMON, ADD_POKEMON, SET_DETAIL, DELETE_POKEMON} from '../action-type'
import axios from 'axios'

export function setPokemon(payload) {
    return {
        type: SET_POKEMON,
        payload
    }
}

export function getPokemon() {
    return (dispatch) => {
        axios.get("http://localhost:3004/pokemon")
        .then((data) => {
            dispatch(setPokemon(data.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function addPokemon(payload) {
    return {
        type: ADD_POKEMON,
        payload
    }
}

export function addToDb(payload) {
    return (dispatch) => {
        axios.post("http://localhost:3004/pokemon", {
            name: payload.name,
            type: payload.type,
            description: payload.description,
            weight: payload.weight,
            image: payload.image
        })
        .then((data) => {
            dispatch(addPokemon(payload))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function setDetail(payload) {
    return {
        type: SET_DETAIL,
        payload
    }
}

export function getDetail(id) {
    return (dispatch) => {
        axios.get(`http://localhost:3004/pokemon/${id}`)
        .then((data) => {
            console.log(data)
            dispatch(setDetail(data.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function deletePokemon(payload) {
    return {
        type: DELETE_POKEMON,
        payload
    }
}

export function deleteFromDb(id) {
    return (dispatch) => {
        axios.delete(`http://localhost:3004/pokemon/${id}`)
        .then((data) => {
            dispatch(deletePokemon(id))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
