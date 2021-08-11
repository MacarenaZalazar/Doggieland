import { GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED, DOG_ORDER_BY_AZ, DOG_FILTER_BY_ORIGIN, DOG_FILTER_BY_TEMPERAMENT, GET_TEMPERAMENTS, DOG_ORDER_BY_WEIGHT} from '../utils/utils'

const initialState = { allBreeds:[], breeds: [], breedId: [], temperaments:[]}

  function rootReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
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
            breeds: state.allBreeds.filter(e => typeof id !== 'number' )
          }
        } else if(action.payload === 'User') {
          return {
            ...state,
            breeds: state.allBreeds.filter(e =>  typeof id === 'number' )
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