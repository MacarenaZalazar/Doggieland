import axios from 'axios'
import { BACKEND, GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED, logg } from '../utils/utils'



export function getBreeds(){
    return function(dispatch){
        return axios.get(`${BACKEND}/dogs`).then(response => {
            dispatch(
                { type: GET_BREEDS, payload: response.data }
            )   
        }).catch(err => console.log(err))
    }
}

export function getBreedsByQuery(name){
    return function(dispatch){
        return axios.get(`${BACKEND}/dogs/?name=${name}`)(response => {
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
        return  axios.post(`${BACKEND}/dog`, dog)(response => {
            dispatch(
                {type: POST_BREED, payload: response.data}
            )   
        })
    }
  


}