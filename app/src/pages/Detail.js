import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DetailPokemon from '../components/Detail'
import {useParams} from 'react-router-dom'
import {getDetail} from '../store/actions/'

function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(id))
    },[dispatch, id])

    return(
        <>
        <div className="container">
            <h1>Detail pokemon </h1>
            {
                detail && <DetailPokemon detail={detail} />
            }
        </div>
        </>
    ) 
}
export default Detail