import React from 'react'
import './Pagination.css'

export default function Pagination({itemsPerPage, totalItems, paginate}){
    const pageNumbers = []
    //console.log(pageNumbers)
    const pageCount = Math.ceil(totalItems/itemsPerPage)
    //console.log(pageCount)
    for(let i = 1; i<= pageCount; i++){
        pageNumbers.push(i)
    }
    //cambio la página
   
    return (
        <div className='paginationContainer'>
           <ul className='paginationUl' >
            { pageNumbers.map((n) => {
                return  <button onClick={()=> paginate(n)} className='paginationLi' key={n} id={n}>{n}</button>  
            }) 
            }
            </ul>
        </div>

    )
}