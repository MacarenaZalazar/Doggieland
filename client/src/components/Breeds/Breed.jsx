import React from 'react'
import { Link } from 'react-router-dom';



export default function Breed({breed}){
    
    
    return  breed ? ( 
        <>
                <h3>{breed.name}</h3>
            {
                breed.image ? <img className='dogImg' src={breed.image} alt={breed.name}/> : <p><loading className=""></loading></p>
            }
             <p>{(breed.temperament>0) && <u>Temperament:</u>}</p><p>{(breed.temperament) && breed.temperament.join(', ')}</p>
             <Link to={`/doggieland/${breed.id}`}>
             <button>See More!</button>
            </Link>
        </>

    ) : (null)

}