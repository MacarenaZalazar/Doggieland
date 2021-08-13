const {getAllApiDogs, getApiDogsByName, getDogsById} = require('./gettersApi')
const {getAllSqlDogs, getSqlDogsByName, getDogsByPk} = require('./gettersDB')
const {getTemperamentsById} = require('./gettersTemperaments')
const {Dog} = require('../db')

async function getAllBreeds(){
    const api = await getAllApiDogs()
    const db = await getAllSqlDogs()
    return [...api, ...db].sort()
}

async function getBreedsByName(name){
    const api = await getApiDogsByName(name)
    const db = await getSqlDogsByName(name)
    return [...api, ...db].sort()
}

async function getBreedById(id){
    let dog
    if(id.length<10){
        id = parseInt(id)
        dog = await getDogsById(id)
    } else {
        dog = await getDogsByPk(id)
    }
    return dog
}

async function postBreed(name, height, weight, life_span, image, temperament){
    const temperamentId =  await getTemperamentsById(temperament)
    const newDog = await Dog.create({
        name, height, weight, life_span, image
    })
    await newDog.setTemperaments(temperamentId)
    return newDog
}


module.exports= {
    getBreedsByName,
    getAllBreeds,
    getBreedById,
    postBreed
}