import React from 'react'
import { Link } from 'react-router-dom';



export default function Breed(props){
    const doggie = props.breed   
    
    return  doggie ? ( 
        <>
                <h3>{doggie.name}</h3>
            {
                doggie.image ? <img className='dogImg' src={doggie.image} alt={doggie.name}/> : <p><loading className=""></loading></p>
            }
             <p>{(doggie.temperament) && <u>Temperament:</u>}</p><p>{(doggie.temperament) && doggie.temperament.join(', ')}</p>
             <Link to={`/breedDetail/${doggie.id}`}>
             <button>See More!</button>
            </Link>
        </>

    ) : (null)

}