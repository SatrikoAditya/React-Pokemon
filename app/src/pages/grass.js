import React from 'react'
import {useSelector} from 'react-redux'
import PokemonByType from '../components/PokemonByType'

function Grass() {
    const pokemon = useSelector((state) => state.pokemon)
    const type = "grass"

    const filter = pokemon.filter((pok) => {
        return pok.type === type
    })
    return (
        <>
        <div className="container">
            <h1>Pokemon type grass</h1>
            {
                filter.map(pok => {
                    return (
                        <PokemonByType filter={pok} key={pok.id} />
                    )
                })
            }
        </div>
        </>
    )
}
export default Grass