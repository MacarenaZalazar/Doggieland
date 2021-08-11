import React, {useEffect, useState} from 'react'
import Breeds from '../Breeds/Breeds'
import { filterByTemp, getBreeds, getBreedsByQuery, getTemperaments, orderAZ, filterByOrigin, orderByWeight } from '../../actions/index'
import { useDispatch, useSelector, useStore } from 'react-redux'




export default function Home(){
  
    // //seteo el useState
    const [input, setInput] = useState('')
    const [selectAZ, setSelectAZ] = useState('Default')
    const [temps, setTemps] = useState('All')
    const [weight, setWeight] = useState('Default')
    const [created, setCreated] = useState('All')
    
  
    //seteo el dispatch
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [])

    const state = useSelector(state => state)
    const {breeds, temperaments} = state
    
   
    
    
    // //para setear el input
    function handleChange(e){
        setInput(e.target.value)
    }
    
    // //para filtrar por razas de perro
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getBreedsByQuery(input))
        setInput('')
    }
    
    //seteo el estado según orden y hago dispatch del filter
    function handleFilter(e){
        console.log(e.target.value)
        setSelectAZ(e.target.value)
        dispatch(orderAZ(e.target.value))
    }
    

    function handleTemps(e){
        setTemps(e.target.value)
        dispatch(filterByTemp(e.target.value))

    }
    function handleCreated(e){
        setCreated(e.target.value)
        dispatch(filterByOrigin(e.target.value))
    }

    function handleWeight(e){
        setWeight(e.target.value)
        dispatch(orderByWeight(e.target.value))
    }


    return (
        <>
            <h3>You're Home!</h3>
            
            <span>Order by</span>
            <div>

            <select value={selectAZ} onChange={handleFilter}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            </div>
            <span>Filter by </span>
            <div>

            <span>Temperament</span>
            <select value={temps} onChange={handleTemps}>
                <option value="All">All</option>
                {temperaments.map((t, idx) => {
                    return <option key={idx} value={t}>{t}</option>
                })}
            </select>
            </div>
            <div>
            <span>Weight</span>
            <select onChange={handleWeight} value={weight}>
                <option value="Default">Default</option>
                <option value="Asc">Asc</option>
                <option value="Desc">Desc</option>
            </select>
            </div>
            <span>Created by</span>
            <select onChange={handleCreated} value={created}>
                <option value="All">All</option>
                <option value="Api">Api</option>
                <option value="User">User</option>
            </select>
            <p>Search by name</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='breed...' value={input} onChange={handleChange} />
                <button type='submit'>Search!</button>
            </form>
            <Breeds breeds={breeds} />
            
           
        </>
    )
}