import React from 'react'

function DetailPokemon(props) {
    const {name, type, description, image} = props.detail
    console.log(props)
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={image} className="card-img-top" alt="pokemon_image"></img>
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <h5 className="card-title"> {type} </h5>
                <p className="card-text"> {description} </p>
            </div>
        </div>
    )
}

export default DetailPokemon

