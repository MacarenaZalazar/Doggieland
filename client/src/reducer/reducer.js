import { GET_BREEDS,GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, POST_BREED} from '../utils/utils'

const initialState = { breeds: [], breedQuery: [], breedId: [], breedPost: []}

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
          breedQuery: action.payload
        }
      case GET_BREEDS_BY_ID:
      return {
        ...state,
        breedId: action.payload
      }
      case POST_BREED:
        return {
          ...state,
          breedPost: action.payload
        }
    default:
    return state;
  }
 } 
  
  export default rootReducer;