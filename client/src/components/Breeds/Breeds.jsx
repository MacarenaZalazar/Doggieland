import React, { useState }  from 'react'
import Breed from './Breed'
import './Breeds.css'

export default  function Breeds({breeds}) {
    console.log(typeof breeds)
    function displayBreeds(data){
        if(typeof data === 'string'){
            return (
                <div className='noFound'>
                    <h3>No breeds where found</h3>
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


