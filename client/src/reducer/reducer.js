import { GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED, DOG_ORDER_BY_AZ, DOG_FILTER_BY_ORIGIN, DOG_FILTER_BY_TEMPERAMENT, GET_TEMPERAMENTS, DOG_ORDER_BY_WEIGHT} from '../utils/utils'

const initialState = { allBreeds:[], breeds: [], breedId: [], temperaments:[]}

  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'CLEAR':
        return {
          ...state, 
          breedId: []
        }
      case GET_BREEDS:
        return {
          ...state,
          allBreeds: action.payload,
          breeds: action.payload
        }
      case GET_BREEDS_BY_QUERY: 
        return {
          ...state,
          breeds: action.payload
        }
      case GET_BREEDS_BY_ID:
      return {
        ...state,
        breedId: action.payload
      }
      case DOG_ORDER_BY_AZ:
        if(action.payload === 'A-Z'){
          return {
            ...state, 
            breeds:[...state.breeds].sort((a,b) =>  a.name.localeCompare(b.name))
          }
        } else if(action.payload === 'Z-A'){
          return {
            ...state, 
            breeds: [...state.breeds].sort((a,b) => b.name.localeCompare(a.name)) 
          } 
         } else {
            return {
              ...state, 
              breeds: state.allBreeds
            }
        }
      case GET_TEMPERAMENTS:
          return {
            ...state,
            temperaments : action.payload
          }
      case DOG_FILTER_BY_TEMPERAMENT:
        console.log(action.payload)
        if(action.payload ==='All'){
          return{
            ...state,
            breeds: [...state.allBreeds]
          }
        } else {
          return{
            ...state,
            breeds: state.allBreeds.filter(e => {
              return e.temperament &&  e.temperament.includes(action.payload)

              }
            )
          }
        }
      case DOG_FILTER_BY_ORIGIN:
        if(action.payload === 'Api'){
          return{
            ...state,
            breeds: (typeof state.breeds !== 'string') && state.breeds.filter(e => typeof e.id === 'number'  )
          }
        } else if(action.payload === 'User') {
          const dogsDB = {
            ...state,
            breeds: (typeof state.breeds !== 'string') && state.breeds.filter(e =>  e.id.length>10 )
          }
          if(dogsDB.breeds.length>0){
            return dogsDB
          } else {
            return {
              ...state,
              breeds: 'empty'
            }
          }
        } else {
          return{
            ...state,
            breeds: state.allBreeds
          }
        }
      case DOG_ORDER_BY_WEIGHT:
        if(action.payload === 'Asc'){
          return{
            ...state,
            breeds: state.breeds.sort((a,b) => a.weight[0] - b.weight[0])
          }
        } else if(action.payload === 'Desc') {
          return{
            ...state,
            breeds: state.breeds.sort((a,b) => b.weight[0] - a.weight[0])
          } 
        } else {
            return {
              ...state, 
              breeds:[...state.breeds].sort((a,b) =>  a.name.localeCompare(b.name))
            }
        }
       
      case POST_BREED:
        return {
          ...state,
          breedId: action.payload
      }
    default:
    return state;
  }
 } 
  
  export default rootReducer;