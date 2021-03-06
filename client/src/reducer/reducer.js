import { GET_BREEDS, GET_BREEDS_BY_QUERY, GET_BREEDS_BY_ID, DOG_ORDER_BY_AZ, DOG_FILTER_BY_ORIGIN, DOG_FILTER_BY_TEMPERAMENT, GET_TEMPERAMENTS, DOG_ORDER_BY_WEIGHT} from '../utils/utils'

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
            breeds:[...state.breeds].sort((a,b) =>  a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
          }
        } else if(action.payload === 'Z-A'){
          return {
            ...state, 
            breeds: [...state.breeds].sort((a,b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())) 
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
        let doggies 
        if(action.payload ==='All'){
          doggies = {
            ...state,
            breeds: [...state.allBreeds]
          }
        } else {
          console.log(state.breeds)
          doggies = {
            ...state,
            breeds:  Array.isArray(state.allBreeds) && state.allBreeds.filter(e => {
              return e.temperament &&  e.temperament.includes(action.payload)

              }
            ) 
          }
        }
        if(doggies.breeds.length>0){
          return doggies
      } else {
      return {
            ...state,
           breeds: 'empty'
       }
      }
      case DOG_FILTER_BY_ORIGIN:
        let dogs
        if(action.payload === 'Api'){
          dogs = {
            ...state,
            breeds: (typeof state.breeds !== 'string') && state.breeds.filter(e => typeof e.id === 'number'  )
          }
        } else if(action.payload === 'User') {
           dogs = {
            ...state,
            breeds: (typeof state.breeds !== 'string') && state.breeds.filter(e =>  e.id.length>10 )
          }
        } else {
          dogs = {
            ...state,
            breeds: state.allBreeds
          }
        }

       if(dogs.breeds.length>0){
            return dogs
      } else {
        return {
              ...state,
             breeds: 'empty'
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
    default:
    return state;
  }
} 
  
export default rootReducer;