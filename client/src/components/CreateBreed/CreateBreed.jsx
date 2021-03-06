import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postNewBreed } from '../../actions';
import { validate } from './utils';
import { Link } from 'react-router-dom';
import { BodyForm, CreatedDiv, Title, CreateFormContainer, CreateFormDiv, Errors, CreateNameDiv, CreateSelectDiv, NewBreed } from './styledCreate';


export default function CreateBreed() {

    const newDog = {
        name: '', 
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        min_life_span:'',
        max_life_span: '',
        image: ''
    }

    const [input, setInput] = useState(newDog)
    const [flag, setFlag] = useState(true)
    const [temps, setTemps] = useState([])   
    const [errors, setErrors] = useState({})
    
    const {temperaments, breedId} = useSelector(state => state)
    

    const dispatch = useDispatch()
    
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getTemperaments())
    },[dispatch])

    function handleChange(e){
        e.preventDefault()
        setFlag(false)
        const {value, name} = e.target
        setInput({
            ...input,
            [name]:value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }
        ))
    }

    const actualErrors = Object.keys(errors)

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

        const doggie= {
            name: input.name,
            height: `${input.min_height} - ${input.max_height}`,
            weight: `${input.min_weight} - ${input.max_weight}`,
            life_span: `${input.min_life_span} - ${input.max_life_span}`,
            image: input.image,
            temperament: temps
        }
        dispatch(postNewBreed(doggie))
        setInput(newDog)
        setTemps([])
        setFlag(true)
    }


    function handleClick(e){
        e.preventDefault()
        setTemps(temps.filter(t => t !== e.target.value))
    }

    function onNewClick(e){
        e.preventDefault()
    }

    return (
        <CreatedDiv>
            <BodyForm>
                <Title>
                <h3>Create you own Breed!</h3>
                <Link to='/doggieland'>
                    <button>Go back!</button>
                </Link>
                </Title>
                <CreateFormContainer>
                        <form onSubmit={handleSubmit}>
                            <CreateNameDiv>
                                <label >Name</label>
                                <input className={errors.name && 'danger'} onChange={handleChange} name="name" type="name" value={input.name} placeholder='name...'/>
                                {errors.name && (
                                    <Errors>
                                        <p className='danger'>{errors.name}</p>
                                    </Errors>
                                )}
                            </CreateNameDiv>
                            <CreateFormDiv>
                                <label >Height</label>
                                <input className={errors.min_height && 'danger'} onChange={handleChange} name="min_height" type="min_height" value={input.min_height} placeholder='min'/>
                                <span> to </span>
                                <input className={errors.max_height && 'danger'} onChange={handleChange} name="max_height" type="max_height" value={input.max_height} placeholder='max'/>
                                <span> cm</span>
                            <Errors>
                                {errors.min_height && (
                                    <p className='danger'>{errors.min_height}</p>
                                )}
                                {errors.max_height && (
                                    <p className='danger'>{errors.max_height}</p>
                                )}
                            </Errors>
                            </CreateFormDiv>
                            <CreateFormDiv>
                                <label>Weight</label>
                                <input className={errors.min_weight && 'danger'}onChange={handleChange} name="min_weight" type="min_weight" value={input.min_weight} placeholder='min'/>
                                <span> to </span>
                                <input className={errors.max_weight && 'danger'}onChange={handleChange} name="max_weight" type="max_weight" value={input.max_weight} placeholder='max'/>
                                <span> kg</span>
                            <Errors>
                                {errors.min_weight && (
                                    <p className='danger'>{errors.min_weight}</p>
                                )}
                                {errors.max_weight && (
                                    <p className='danger'>{errors.max_weight}</p>
                                )}
                            </Errors>
                            </CreateFormDiv>
                            <CreateFormDiv>
                                <label>Lifespan</label>
                                <input className={errors.min_life_span && 'danger'}onChange={handleChange} name="min_life_span" type="min_life_span" value={input.min_life_span} placeholder='min'/>
                                <span> to </span>
                                <input className={errors.max_life_span && 'danger'}onChange={handleChange} name="max_life_span" type="max_life_span" value={input.max_life_span} placeholder='max'/>
                                <span> years </span>
                            <Errors>
                                {errors.min_life_span && (
                                    <p className='danger'>{errors.min_life_span}</p>
                                )}
                                {errors.max_life_span  && (
                                    <p className='danger'>{errors.max_life_span}</p>
                                )}
                            </Errors>
                            </CreateFormDiv>
                            <CreateNameDiv>
                                <label>Image</label>
                                <input className={errors.image && 'danger'}onChange={handleChange} name="image" type="name" value={input.image} placeholder='url...'/>
                                <Errors>
                                {errors.image && (
                                    <p className='danger'>{errors.image}</p>
                                )}
                                </Errors>
                            </CreateNameDiv>
                            <CreateSelectDiv>
                                <label >Temperament</label>
                                <select name="temperaments" onChange={handleTemps}  type="text" >
                                    <option value={null}></option>
                                    {temperaments.map((e, idx)=>{
                                    return (
                                        <option key={idx} value={e}>{e}</option>
                                        )
                                    })}
                                </select>
                            </CreateSelectDiv>
                            <CreateNameDiv>
                                { temps.map((e, idx) =>{
                                    return ( 
                                        <React.Fragment key={idx}>
                                            <span >{e}</span>
                                            <button value={e} onClick={handleClick}>X</button>
                                        </React.Fragment>
                                        )
                                    })    
                                }
                            </CreateNameDiv>
                                <button  disabled={(actualErrors.length>0) || flag === true}>Add Breed</button>
                        </form> 
                    </CreateFormContainer>
                    {breedId.length>0 && (
                        <NewBreed>
                            <Link to={`/doggieland/${breedId[0].id}`}>
                                <button onChange={onNewClick} id='newBreedBttn'>See your breed!</button>
                            </Link>
                        </NewBreed>
                    )}
            </BodyForm>
        </CreatedDiv>
    )
}