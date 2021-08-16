import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postNewBreed } from '../../actions';
import { validate } from './utils';
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

})

const [temps, setTemps] = useState([])   
const [errors, setErrors] = useState('')
const state = useSelector(state => state)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getTemperaments())
},[])

console.log(state)

function handleChange(e){
    e.preventDefault()
    const {value, name} = e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log(input)
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }
    ))
}


function handleTemps(e){
    if(!temps.includes(e.target.value)){
        if(temps.length > 0){
            setTemps([...temps, e.target.value])
        } else {
            setTemps([e.target.value])
        }
    } 

}

  


function handleSubmit(e){
    e.preventDefault()

    const newDog= {
        name: input.name,
        height: `${input.min_height} - ${input.max_height}`,
        weight: `${input.min_weight} - ${input.max_weight}`,
        life_span: `${input.min_life_span} - ${input.max_life_span}`,
        image: input.image,
        temperament: temps
    }
    dispatch(postNewBreed(newDog))
}

function handleClick(e){
    e.preventDefault()
    setTemps(temps.filter(t => t !== e.target.value))
}


    return (
        <>
        <div className='bodyForm'>
            <h3>Create you own Breed!</h3>
            <form className='createForm' onSubmit={handleSubmit}>
                <div className='divCreateName'>
                <label >Name</label>
                <input className={errors.name && 'danger'} onChange={handleChange} name="name" type="name" value={input.name} placeholder='name...'/>
                {errors.name && (
                    <div className='errors'>
                        <p className='danger'>{errors.name}</p>
                    </div>
                )}
                </div>
                <div className='divCreateForm'>
                <label >Height</label>
                <input className={errors.min_height && 'danger'} onChange={handleChange} name="min_height" type="min_height" value={input.min_height} placeholder='min'/>
                <span> to </span>
                <input className={errors.max_height && 'danger'} onChange={handleChange} name="max_height" type="max_height" value={input.max_height} placeholder='max'/>
                    <span> cm</span>
                <div className='errors'>
                {errors.min_height && (
                        <p className='danger'>{errors.min_height}</p>
                        )}
                {errors.max_height && (
                    <p className='danger'>{errors.max_height}</p>
                    )}
                </div>
                </div>
                <div className='divCreateForm'>
                <label>Weight</label>
                <input className={errors.min_weight && 'danger'}onChange={handleChange} name="min_weight" type="min_weight" value={input.min_weight} placeholder='min'/>
                <span> to </span>
                <input className={errors.max_weight && 'danger'}onChange={handleChange} name="max_weight" type="max_weight" value={input.max_weight} placeholder='max'/>
                    <span> kg</span>
                <div className='errors'>
                {errors.min_weight && (
                    <p className='danger'>{errors.min_weight}</p>
                    )}
                {errors.max_weight && (
                    <p className='danger'>{errors.max_weight}</p>
                    )}
                </div>
                </div>
                <div className='divCreateForm'>
                <label>Lifespan</label>
                <input className={errors.min_life_span && 'danger'}onChange={handleChange} name="min_life_span" type="min_life_span" value={input.min_life_span} placeholder='min'/>
                <span> to </span>
                <input className={errors.max_life_span && 'danger'}onChange={handleChange} name="max_life_span" type="max_life_span" value={input.max_life_span} placeholder='max'/>
                <span> years </span>
                <div className='errors'>
                {errors.min_life_span && (
                    <p className='danger'>{errors.min_life_span}</p>
                    )}
                {errors.max_life_span  && (
                    <p className='danger'>{errors.max_life_span}</p>
                    )}
                </div>
                </div>
                <div className='divCreateName'>
                <label>Image</label>
                <input className={errors.image && 'danger'}onChange={handleChange} name="image" type="name" value={input.image} placeholder='url...'/>
                <div className='errors'>
                {errors.image && (
                    <p className='danger'>{errors.image}</p>
                    )}
                </div>
                </div>
                <div className='divCreateSelect'>
                <label >Temperament</label>
                <select name="temperaments" onChange={handleTemps}  type="text" >
                <option value={null}></option>
                {state.temperaments.map(e=>{
                    return (
                        <option value={e}>{e}</option>
                        )
                    })}
                    </select>
                </div>
                <div className='temperaments'>

                    { temps.map((e, idx) =>{
                        return ( 
                            <>
                                <span key={idx}>{e}</span>
                                <button value={e} onClick={handleClick}>X</button>
                            </>
                            )
                        })    
                    }
                </div>
                <div className='buttonDiv'>
                    <button  disabled={(errors)}>Add Breed</button>
                </div>
            </form>
        </div>
        </>
    )

}