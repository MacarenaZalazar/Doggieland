import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBreedsById } from '../../actions';
import './BreedDetail.css'

export default function BreedDetail(props) {
    let id = props.match.params.id
    const dispatch = useDispatch()
    const b = useSelector(state => state.breedId[0])
    
    useEffect(() => {
        dispatch(getBreedsById(id))
    }, [])
   
    return b ? ( <div className='containerDetail' >
            <h1>{(b.name) && b.name}</h1>
            <img className='containerDetailimg' src={b.image}  alt={b.name} />
            <h3>{b.height} cm</h3> 
            <h3>{b.weight} kg</h3> 
            <h3>{b.life_span.join('-')} years</h3>
            <p>{(b.temperament) && b.temperament.join(', ')} </p>
       
        </div>
    ) : (
        <p>Loading...</p>
    )
}