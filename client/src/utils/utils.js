//servidor
export const BACKEND = 'http://localhost:3001'

//actions types
export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREEDS_BY_QUERY = 'GET_BREEDS_BY_QUERY'
export const GET_BREEDS_BY_ID = 'GET_BREEDS_BY_ID'
export const POST_BREED = 'POST_BREED'
export const DOG_FILTER_BY_AZ = 'DOG_FILTER_BY_AZ'
export const DOG_FILTER_BY_ID = 'DOG_FILTER_BY_AZ'
export const DOG_FILTER_BY_TEMPERAMENT = 'DOG_FILTER_BY_AZ'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'

//para consologuear
export function logg(error){
    console.log(error)
}
