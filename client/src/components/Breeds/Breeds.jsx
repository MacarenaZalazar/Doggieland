import React, { useState }  from 'react'
import Breed from './Breed'
import './Breeds.css'

export default  function Breeds({breeds}) {
    function displayBreeds(data){
        return data && (
           data.map((b, idx)=> {
                return  (
                    <div key={idx} className='doggieDiv'> 
                        <Breed key={idx} breed={b}/>
                    </div>)
            })
        )
    }
    
    

    return  breeds ? ( 
        <>
            
        <div className='dogsContainer'>
            {displayBreeds(breeds)}
        </div>
        </>
        ) : (
            <p>loading</p>
        )
        
    
}


