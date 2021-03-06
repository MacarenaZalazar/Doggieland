import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { clearIdBreed, getBreedsById } from '../../actions';
import { Link } from 'react-router-dom';
//import './BreedDetail.css'
import { DetailContainer, DetailPage } from './styledDetail';

export default function BreedDetail(props) {
  
    let id = props.match.params.id
    const dispatch = useDispatch()
    const b = useSelector(state => state.breedId[0])
   
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getBreedsById(id))
    }, [dispatch])
   
    function handleClick(e){
        dispatch(clearIdBreed())
    }   

    return (
        <DetailPage>
            <DetailContainer>
            {b ? ( 
                <>
                <h1>{(b.name) && b.name}</h1>
                <img  src={b.image}  alt={b.name} />
                <h3>Height: {b.height.join(' to ')} cm</h3> 
                <h3>Weight: {b.weight.join(' to ')} kg</h3> 
                <h3>Lifespan: {b.life_span.join(' to ')} years</h3>
                <h3>{ (b.temperament) && <u>Temperament:</u> } {(b.temperament) &&  b.temperament.join(', ')} </h3>
                <Link to='/doggieland'>
                    <button onClick={handleClick}>Go Back!</button>
                </Link>
                </>
            ) : ( <h1>Loading...</h1> )}
            </DetailContainer>
        </DetailPage>
        )
        
}