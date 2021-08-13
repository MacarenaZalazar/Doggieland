import React, {useEffect} from 'react'
import Breeds from '../Breeds/Breeds'
import {getBreeds,getTemperaments} from '../../actions/index'
import { useDispatch, useSelector} from 'react-redux'
import'./Home.css'
import Filters from '../Filters/Filters';



export default function Home(){
    
    //seteo el dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [])

    const state = useSelector(state => state)
    const {breeds, temperaments} = state
  


    return (
        <>
            <Filters temperaments={temperaments} />
            <Breeds breeds={breeds} />
        </>
    )
}