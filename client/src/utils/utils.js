//servidor
export const BACKEND = 'http://localhost:3001'

//actions types
export const GET_BREEDS = 'GET_BREEDS'
export const GET_BREEDS_BY_QUERY = 'GET_BREEDS_BY_QUERY'
export const GET_BREEDS_BY_ID = 'GET_BREEDS_BY_ID'
export const POST_BREED = 'POST_BREED'

//para consologuear
export function logg(error){
    console.log(error)
}
