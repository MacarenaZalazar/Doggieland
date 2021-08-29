import React from 'react'
import './Pagination.css'

export default function Pagination({paginate, pageNumbers}){

    return (
        <div className='paginationContainer'>
           <ul className='paginationUl' >
                { pageNumbers.length > 1 && pageNumbers.map((n) => {
                    return  <button onClick={()=> paginate(n)} className='paginationLi' key={n} id={n}>{n}</button>  
                }) 
                }
            </ul>
        </div>
    )
}