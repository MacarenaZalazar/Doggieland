import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom';
import { getBreeds } from '../../actions/index'


export default function Breeds() {
    const dispatch = useDispatch()
    useEffect(() => {
    console.log('estoy en use effect')
      dispatch(getBreeds())
    }, [])

    let store = useSelector(state => state.breeds)
 

    return  ( 
        <div> 
            <h1>I'm Breeds</h1>
             { store ? store.map(b => {
            return <div> 
                <Link to={`/breedsDetail/${b.id}`}>
                    <h3>{b.name}</h3>
                </Link>
            <img src={b.image} alt={b.name}/>
             <p>{(b.temperament) && b.temperament.toString()}</p>
             
            
            </div>
        }) : (
            <p>loading</p>
        )
        }
        
        </div>
    )
}




