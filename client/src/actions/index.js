import axios from 'axios'
import { BACKEND, GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED, DOG_ORDER_BY_AZ, DOG_FILTER_BY_ORIGIN, DOG_FILTER_BY_TEMPERAMENT, GET_TEMPERAMENTS, DOG_ORDER_BY_WEIGHT } from '../utils/utils'

export function clearIdBreed(){
    return {type :'CLEAR'}
}

export function getBreeds(){
    return function(dispatch){
        return axios.get(`${BACKEND}/dogs`).then(response => {
            dispatch(
                { type: GET_BREEDS, payload: response.data }
            )   
        })
    }
}

export function getTemperaments(){
    return function(dispatch){
        return axios.get(`${BACKEND}/temperament`).then(response => {
            dispatch(
                { type: GET_TEMPERAMENTS, payload: response.data }
            )   
        })
    }
}


export function getBreedsByQuery(name){
    return function(dispatch){
        return axios.get(`${BACKEND}/dogs/?name=${name}`).then(response => {
            dispatch(
                { type: GET_BREEDS_BY_QUERY, payload: response.data}
            )   
        })
    }

}

export function getBreedsById(id){
    return function(dispatch){
        return axios.get(`${BACKEND}/dogs/${id}`).then(response => {
            dispatch(
                { type: GET_BREEDS_BY_ID, payload: response.data}
            )   
        })
    }
}

export function postNewBreed(dog){
    return function(dispatch){
        return  axios.post(`${BACKEND}/dog`, dog).then(response => {
            dispatch(
                {type: POST_BREED, payload: response.data}
            )   
        })
    }  
}

export function orderAZ(order){
    return {type: DOG_ORDER_BY_AZ, payload: order}
        
}

export function orderByWeight(order){
    return {type: DOG_ORDER_BY_WEIGHT, payload: order}
        
}

export function filterByOrigin(origin){
    return {type: DOG_FILTER_BY_ORIGIN, payload: origin}
}

export function filterByTemp(temp){
    return {type: DOG_FILTER_BY_TEMPERAMENT, payload: temp}
} 

