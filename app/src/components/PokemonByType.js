import React from 'react'

function PokemonByType(props) {
    const {name, type, description, image} = props.filter
    console.log(props.filter)
    return (
        <>
        <div className="media">
            <img src={image} width="100px" alt="pokemon_image"></img>
            <div className="media-body">
                <h5 className="mt-0"> {name} </h5>
                <h5 className="mt-0"> {type} </h5>
                {description}<br></br>
            </div>
        </div>
        <br></br>
        </>
    )
}
export default PokemonByType