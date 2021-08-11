import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewBreed } from '../../actions';
import './CreateBreed.css'


export default function CreateBreed() {
const [input, setInput] = useState({ 
    name: '',
    min_height:'', 
    max_height: '', 
    min_weight: '', 
    max_weight:'',
    min_life_span:'', 
    max_life_span: '',
    image: '',
    temperaments: []
})

const [temps, setTemps] = useState({temperaments: []})   
const [errors, setErrors] = useState('')
const state = useSelector(state => state)
const dispatch = useDispatch()

function handleChange(e){
    e.preventDefault()
    const {value, name} = e.target
    setInput({
        ...input,
        [name]:value
    })
    setErrors()
}

console.log(input)

function handleTemps(e){
    if(temps.temperaments && !temps.temperaments.includes(e.target.value) && e.target.value){
        temps.temperaments.push(input.temperaments)
    }

  
}
function handleSubmit(e){
    e.preventDefault()
    const newDog= {
        name: input.name,
        height: `${input.min_height} ${input.max_height}`,
        weight: `${input.min_weight} ${input.max_weight}`,
        life_span: `${input.min_life_span} ${input.max_life_span}`,
        image: input.image,
        temperaments: temps.temperaments
    }
    dispatch(postNewBreed(newDog))
    console.log(newDog)
}
function handleClick(e){
    e.preventDefault()

}


console.log(input.temperaments)
console.log(temps.temperaments)

    return (
        <>
        <p>Create you own Breed!</p>
        <div>
        <form className='createForm' onSubmit={handleSubmit}>
            <div className='divCreateForm'>
            <label >Name</label>
            <input onChange={handleChange} name="name" type="name" value={input.name} placeholder='name...'/>
            </div>
            <div className='divCreateForm'>
            <label >Height</label>
            <input onChange={handleChange} name="min_height" type="min_height" value={input.min_height} placeholder='min'/>
            <span>to</span>
            <input onChange={handleChange} name="max_height" type="max_height" value={input.max_height} placeholder='max'/>
            <span>cm</span>
            </div>
            <div className='divCreateForm'>
            <label>Weight</label>
            <input onChange={handleChange} name="min_weight" type="min_weight" value={input.min_weight} placeholder='min'/>
            <span>to</span>
            <input onChange={handleChange} name="max_weight" type="max_weight" value={input.max_weight} placeholder='max'/>
            <span>kg</span>
            </div>
            <div className='divCreateForm'>
            <label>Lifespan</label>
            <input onChange={handleChange} name="min_life_span" type="min_life_span" value={input.min_life_span} placeholder='min'/>
            <span>to</span>
            <input onChange={handleChange} name="max_life_span" type="max_life_span" value={input.max_life_span} placeholder='max'/>
            <span>years</span>
            </div>
            <div className='divCreateForm'>
            <label >Image</label>
            <input onChange={handleChange} name="image" type="name" value={input.image} placeholder='copy url...'/>
            </div>
            <div className='divCreateForm'>
            <label >Temperament</label>
            <select name="temperaments" onChange={handleChange} onClick={handleTemps} type="text" >
            <option value={null}></option>
            {state.temperaments.map(e=>{
                return (
                    <option value={e}>{e}</option>
                    )
                })}
                </select>
            </div>
            { temps.temperaments.map(e =>{
                    return ( 
                        <div>
                        <span >{e}</span>
                        <button onClick={handleClick} >X</button>
                        </div>
                    )
                }

                    )    
            }
            <button >Add Breed</button>

        </form>
        </div>
        </>
    )

}