import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getBreedsById } from '../../actions';


export default function BreedsDetail(props) {
    let id = props.match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getBreedsById(id))
  }, [])
  
    const b = useSelector(state => state.breedId[0])
    console.log(b)
    return b ? ( <div>
        
            <p>Soy BreedsDetail</p>
            <h1>{(b.name) && b.name}</h1>
            <img src={b.image}  alt={b.name} />
            <h3>{b.height}</h3>
            <h3>{b.weight}</h3>
            <h3>{b.life_span}</h3>
            <p>{(b.temperament) && b.temperament.toString()} </p>
       
        </div>
    ) : (
        <p>loading</p>
    ) 

}