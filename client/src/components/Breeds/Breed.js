import React from 'react'
import { Link } from 'react-router-dom';


export default function Breed(props){

    return  ( 
        <div>
            <Link to={`/breedDetail/${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <img src={b.image} alt={props.name}/>
             <p>{(props.temperament) && props.temperament.toString()}</p>
 
        </div>

    )

}