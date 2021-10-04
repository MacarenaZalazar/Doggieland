import React from 'react'
import Breed from './Breed'
//import './Breeds.css'
import { useDispatch } from 'react-redux';
import { getBreeds } from '../../actions';
import { BreedsCont, DogsContainer, DoggieDiv, NotFound } from './styledBreeds';


export default  function Breeds({breeds}) {
    const dispatch = useDispatch()
  
    function handleClick(e){
        e.preventDefault()
        dispatch(getBreeds())
    }

    function displayBreeds(data){
        if(typeof data === 'string'){
            return (
                <NotFound>
                    <h3>No breeds where found</h3>
                    <button onClick={handleClick}>See All</button>
                </NotFound>
            )
        } else {
            return data && (
                <DogsContainer>
                {data.map((b, idx)=> {
                    return  (
                        <DoggieDiv key={idx} > 
                            <Breed key={idx} breed={b}/>
                        </DoggieDiv>
                        )
                    })}
                 </DogsContainer>
            )
        }
    }
    
    

    return  (
    <BreedsCont>
        {breeds ? ( 
           <> {displayBreeds(breeds)} </>
        ) : (
            <p>loading</p>
        )}
        </BreedsCont>
    )
    
}


