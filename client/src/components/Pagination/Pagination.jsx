import React from 'react'
import { PagDiv } from './styledPagination';

export default function Pagination({paginate, pageNumbers}){

    return (
        <PagDiv>
           <ul className='paginationUl' >
                { pageNumbers.length > 1 && pageNumbers.map((n) => {
                    return  <button onClick={()=> paginate(n)} className='paginationLi' key={n} id={n}>{n}</button>  
                }) 
                }
            </ul>
        </PagDiv>
    )
}