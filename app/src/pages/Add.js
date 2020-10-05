import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {addToDb} from '../store/actions/'
import {useDispatch} from 'react-redux'

function Add() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [weight, setWeight] = useState(null)
    const [image, setImage] = useState("")
    const [type, setType] = useState("")
    const [error, setError] = useState("")

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeDesc = (event) => {
        setDescription(event.target.value)
    }
    const handleChangeWeight = (event) => {
        setWeight(event.target.value)
    }
    const handleChangeImg = (event) => {
        setImage(event.target.value)
    }
    const handleChangeType = (event) => {
        setType(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            name, description, weight, image, type
        }
        if(!name) {
            setError('Name is required')
        } else if(!description) {
            setError('Description is required')
        } else if(!weight) {
            setError('weight is required')
        } else if(!type) {
            setError('type is required')
        } else {
            dispatch(addToDb(payload))
            history.push('/')
        }
    }

    return (
        <>
        <div className="container">
            <h2>Add new Pokemon</h2>
            {error}
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="input name here..."
                        value={name}
                        onChange={handleChangeName}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="input description here..."
                        value={description}
                        onChange={handleChangeDesc}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="input weight here..."
                        value={weight}
                        onChange={handleChangeWeight}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="input image here..."
                        value={image}
                        onChange={handleChangeImg}
                        ></input>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <select value={type} onChange={handleChangeType} className="form-control">
                        <option value="" disabled selected>-- Select Type Here --</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-2">Add New Pokemon</button>
            </form>
        </div>
        </>
    )
}

export default Add