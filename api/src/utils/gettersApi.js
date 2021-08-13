const axios = require('axios');
const {YOUR_API_KEY} = process.env
const {mapping} = require('./utils')

//traigo todas las razas de la Api
async function getAllApiDogs() {
    let dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    dogs = mapping(dogs.data)
    return dogs
}

//traigo todas las razas filtradas por nombre de la Api
async function getApiDogsByName(name){
    let dogs = await getAllApiDogs(name)
    dogs = dogs.filter(e =>  e.name.toLowerCase().includes(name.toLocaleLowerCase()))
    return dogs
}

//traigo todas las razas filtradas por id de la Api
async function getDogsById(id){
    let dogs = await getAllApiDogs()
    let dogId = dogs.filter( e => e.id === id)
    return dogId
}

module.exports = {
    getAllApiDogs,
    getApiDogsByName,
    getDogsById
}