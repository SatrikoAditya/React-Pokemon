import React from 'react'
import {useHistory} from 'react-router-dom'
import {deleteFromDb} from '../store/actions/'
import {useDispatch} from 'react-redux'

function Pokemon(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const {description, image, name, type, id} = props.pok

    function handleDetail(id) {
        history.push(`/pokemon/${id}`)
    }

    function handleDelete(id) {
        dispatch(deleteFromDb(id))
    }

    return (
        <>
        <div className="media">
            <img src={image} width="100px" alt="pokemon_image"></img>
            <div className="media-body">
                <h5 className="mt-0"> {name} </h5>
                <h5 className="mt-0"> {type} </h5>
                {description}<br></br>
                <button type="button" onClick={() => handleDetail(id)} className="btn btn-success">Details</button>
                <button type="button" onClick={() => handleDelete(id)} className="btn btn-danger ml-2">Delete</button>
            </div>
        </div>
        <br></br>
        </>
    )
}

export default Pokemon