import React, {useEffect} from 'react'
import Pokemon from '../components/Pokemon'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemon} from '../store/actions/'

function Home() {
    // const [pokemon, setPokenmon] = useState([])
    const pokemon = useSelector((state) => state.pokemon)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemon())
    }, [dispatch])

    return (
        <>
        <div className="container">
            <h1>Pokemon List</h1>
            <br></br>
            {
                pokemon.map(pok => {
                    return (
                        <Pokemon pok={pok} key={pok.id} />
                    )
                })
            }
        </div>
        </>
    )
}

export default Home