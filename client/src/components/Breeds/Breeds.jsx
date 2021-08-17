import React from 'react'
import Breed from './Breed'
import './Breeds.css'
import { useDispatch } from 'react-redux';
import { getBreeds } from '../../actions';


export default  function Breeds({breeds}) {
    const dispatch = useDispatch()
  
    function handleClick(e){
        e.preventDefault()
        dispatch(getBreeds())

    }

    function displayBreeds(data){
        if(typeof data === 'string'){
            return (
                <div className='noFound'>
                    <h3>No breeds where found</h3>
                    <button onClick={handleClick}>See All</button>
                </div>
            )
        } else {
            return data && (
                <div className='dogsContainer'>
                {data.map((b, idx)=> {
                    return  (
                        <div key={idx} className='doggieDiv'> 
                        <Breed key={idx} breed={b}/>
                        </div>
                        )
                    })}
                 </div>
            )
        }
    }
    
    

    return  breeds ? ( 
        <>  
        <div id='marginTop'>
            {displayBreeds(breeds)}
        </div>
        </>
        ) : (
            <p>loading</p>
        )
        
    
}


