import React, { useState }  from 'react'
import Breed from './Breed'
import Pagination from '../Pagination/Pagination'
import './Breeds.css'

export default  function Breeds(props) {
    
    const breeds = props.breeds
    //console.log(breeds) 
    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 9
    const idxLastItem = pageNumber * itemsPerPage 
    const idxFirstItem = idxLastItem - itemsPerPage
    const currentITems = breeds && breeds.slice(idxFirstItem, idxLastItem)    
    const totalItems = breeds && breeds.length 
    //console.log(totalItems)
    //console.log(pageNumber)
    //console.log(currentITems)

    const pagesVisited = pageNumber * itemsPerPage 
    
    //console.log(pagesVisited)
  
   

    function displayBreeds(data){
        return data && (
           data.map((b, idx)=> {
                return  (
                    <div className='doggieDiv'> 
                        <Breed key={idx} breed={b}/>
                    </div>)
            })
        )
    }
    function paginate(e){
        console.log(e)
        setPageNumber(Number(e))
    }


    return  breeds ? ( 
        <>
        <div>
            <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} paginate={paginate} />
        </div>
        <div className='dogsContainer'>
            {displayBreeds(currentITems)}
        </div>
        </>
        ) : (
            <p>loading</p>
        )
        
    
}


