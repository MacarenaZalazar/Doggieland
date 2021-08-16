import React, {useEffect, useState} from 'react'
import Breeds from '../Breeds/Breeds'
import {getBreeds,getTemperaments} from '../../actions/index'
import { useDispatch, useSelector} from 'react-redux'
import'./Home.css'
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination'



export default function Home(){
    
    //seteo el dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('estoy en useEffect')
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [])

    const state = useSelector(state => state)
    const {breeds, temperaments} = state

  
    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 9
    const idxLastItem = pageNumber * itemsPerPage 
    const idxFirstItem = idxLastItem - itemsPerPage
    const currentITems = breeds && breeds.slice(idxFirstItem, idxLastItem)    
    const totalItems = breeds && breeds.length 
    //const pagesVisited = pageNumber * itemsPerPage 
    const pageNumbers = []
    const pageCount = Math.ceil(totalItems/itemsPerPage)
    for(let i = 1; i<= pageCount; i++){
        pageNumbers.push(i)
    }

    function paginate(e){
        setPageNumber(Number(e))
    }
    


    return (
        <>  
            <div className='homeContainer'>
                <div className='filterAndPag'>
                    <Filters temperaments={temperaments} paginate={paginate}/>
                    <Pagination  pageNumbers={pageNumbers} paginate={paginate} />
                </div>
                <Breeds breeds={currentITems} />
            </div>
        </>
    )
}