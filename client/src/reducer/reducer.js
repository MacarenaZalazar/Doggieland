import { GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED, DOG_FILTER_BY_AZ, DOG_FILTER_BY_ID, DOG_FILTER_BY_TEMPERAMENT, GET_TEMPERAMENTS} from '../utils/utils'

const initialState = { status: 'All', breeds: [], breedId: [], temperaments:[], filtered: []}

  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BREEDS:
        return {
          ...state,
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
      case DOG_FILTER_BY_AZ:
        if(action.payload === 'Z-A'){
          return {
            ...state, 
            breeds: [...state.breeds].sort((a,b) => a.name.localeCompare(b.name)) }
        } else {
          return {
            ...state, 
            breeds:[...state.breeds].sort((a,b) =>  b.name.localeCompare(a.name))
          }
        }
      case GET_TEMPERAMENTS:
          return {
            ...state,
            temperaments : action.payload
          }
      case DOG_FILTER_BY_TEMPERAMENT:
        if(action.payload =='All'){
          return{
            ...state,
            status: 'All'

          }
        }
          return {
            ...state,
            filtered: [...state.breeds].filter(e => e.temperaments.includes(action.payload)),
            status: 'Filtered'
          }
       
      case POST_BREED:
        return {
          ...state,
          breeds: action.payload
        }
    default:
    return state;
  }
 } 
  
  export default rootReducer;