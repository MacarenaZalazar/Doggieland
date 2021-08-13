import React from 'react'
import { Link } from 'react-router-dom';



export default function Breed(props){
    const doggie = props.breed
    //console.log(doggie)
    return  doggie ? ( 
        <>
            <Link to={`/breedDetail/${doggie.id}`}>
                <h3>{doggie.name}</h3>
            </Link>{
                doggie.image ? <img className='dogImg' src={doggie.image} alt={doggie.name}/> : <p><loading className=""></loading></p>
            }
             <p>{(doggie.temperament) && doggie.temperament.join(', ')}</p>
        </>

    ) : ( null)

}