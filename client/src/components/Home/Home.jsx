import React, {useEffect, useState} from 'react'
import Breed from '../Breeds/Breed'
import { filterByTemp, getBreeds, getBreedsByQuery, getTemperaments, orderAZ } from '../../actions/index'
import { useDispatch, useSelector, useStore } from 'react-redux'




export default function Home(){
  
    // //seteo el useState
    const [input, setInput] = useState('')
    const [selectAZ, setSelectAZ] = useState('A-Z')
    const [temps, setTemps] = useState('')
  
    //seteo el dispatch
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [])

    const state = useSelector(state => {
        return { breeds: state.breeds, temperaments: state.temperaments, filtered: state.filtered, status: state.status}

    })
    const temperaments = state.temperaments
    const filtered = {breeds: state.filtered, status: state.status}
    const breeds = {breeds: state.breeds, status: state.status}
    
    
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
        setSelectAZ(e.target.value)
        dispatch(orderAZ(selectAZ))
    }
    
    function handleTemps(e){
        setTemps(e.target.value)
        dispatch(filterByTemp(temps))

    }
    return (
        <>
            <h3>You're Home!</h3>
            <span>Filter by</span>
            <select onChange={handleFilter}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select onChange={handleTemps}>
                {temperaments.map(t => {
                  return <option value={t}>{t}</option>
                })}
            </select>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='breed...' value={input} onChange={handleChange} />
                <button type='submit'>Search!</button>
            </form>
            
           
        </>
    )
}