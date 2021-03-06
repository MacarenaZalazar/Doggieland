import React, {useState} from "react"
import { filterByTemp, getBreedsByQuery, orderAZ, filterByOrigin, orderByWeight } from '../../actions/index'
import { useDispatch } from "react-redux"
import { FilterDiv } from './styledFilters';


export default function Filters({temperaments, paginate}){
    //seteo el useState
    const [input, setInput] = useState('')
    const [selectAZ, setSelectAZ] = useState('Default')
    const [temps, setTemps] = useState('All')
    const [weight, setWeight] = useState('Default')
    const [created, setCreated] = useState('All')
      
    //seteo el dispatch
    const dispatch = useDispatch()
        
    // //para setear el input
    function handleChange(e){
        setInput(e.target.value)
    }
    
    // //para filtrar por razas de perro
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBreedsByQuery(input))
        setInput('')
        paginate(1)
    }
    
    //seteo el estado según orden y hago dispatch del filter
    function handleFilter(e){
        setSelectAZ(e.target.value)
        paginate(1)
        dispatch(orderAZ(e.target.value))
    }
    

    function handleTemps(e){
        paginate(1)
        setTemps(e.target.value)
        dispatch(filterByTemp(e.target.value))

    }
    function handleCreated(e){
        paginate(1)
        setCreated(e.target.value)
        dispatch(filterByOrigin(e.target.value))
    }

    function handleWeight(e){
        paginate(1)
        setWeight(e.target.value)
        dispatch(orderByWeight(e.target.value))
    }



    return (
        <FilterDiv>
            <div className='filterClass'> 
                <span>Order by</span>
                <div className='otroDivContainer'>
                    <div className='filterSelect'>
                        <span>A-Z</span>
                        <select value={selectAZ} onChange={handleFilter}>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                        </select>
                    </div>
                    <div className='filterSelect'>
                        <span>Weight</span>
                        <select onChange={handleWeight} value={weight}>
                            <option value="Default">Default</option>
                            <option value="Asc">Asc</option>
                            <option value="Desc">Desc</option>
                        </select>
                    </div>
                </div>
            </div>
        <div className='filterClass'>
            <span>Filter by </span>
            <div className='otroDivContainer'>
                <div className='filterSelect'>
                    <span>Temperament</span>
                    <select value={temps} onChange={handleTemps}>
                        <option value="All">All</option>
                        {temperaments.map((t, idx) => {
                            return <option key={idx} value={t}>{t}</option>
                        })}
                    </select>
                </div >
                <div className='filterSelect'>
                    <span>Created by</span>
                    <select onChange={handleCreated} value={created}>
                        <option value="All">All</option>
                        <option value="Api">Api</option>
                        <option value="User">User</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='filterClass'>
            <span>Search by</span>
            <div className='filterSelect' >
                <span>Name</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='breed...' value={input} onChange={handleChange} />
                    <button type='submit'>Search!</button>
                </form>
            </div>
        </div>
    </FilterDiv>
    )
}