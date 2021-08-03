const axios = require('axios');
const {YOUR_API_KEY} = process.env
const {Dog, Temperament} = require('../db')


const exclude = { atributes: { exclude: ['createdAt', 'UpdatedAt']}}

//mapeo para que solo me venga la info que necesito de la Api
function mapping(doggies){
    doggies.map(e => {
        return { 
            id: e.id, 
            name: e.name, 
            height: e.height, 
            weight: e.weight, 
            life_span: e.life_span,
            image:e.image.url,
            temperament: e.temperament
        }
    })
}

//traigo los nombres de los temperamentos de la DB
async function getTemperamentsName(){
    let temp =  await Temperament.findAll(exclude)
    temp = temp.map(e => e.name)
    return temp
}

//traigo los temperamentos según su nombre
async function getTemperamentsById(name){
    let temp =  await Temperament.findAll(exclude , {where: { name: name}})
    return temp.map(e => e.id)
}

//traigo todas las razas de la Api
async function getAllApiDogs() {
    let dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    dogs = dogs.data
    return mapping(dogs)
}

//traigo todas las razas de la DB
async function getAllSqlDogs() {
    let dogs = await Dogs.findAll(exclude)
    return dogs
}

//traigo las razas filtradas por nombre de la DB
async function getSqlDogsByName(name){
    let dogs = await Dogs.findAll(exclude, { where: { name: {[Op.like]: `%${name}%`}}})
    return dogs
}

//traigo todas las razas filtradas por nombre de la Api
async function getApiDogsByName(name){
    let dogs = getAllApiDogs()
    dogs = dogs.filter(e =>  e.name.toLowerCase().includes(name.toLocaleLowerCase()))
    return dogs
}

//traigo todas las razas filtradas por id de la DB
async function getDogsByPk(pk){
    let dog = await Dog.findByPk(pk)
    return dog
}

//traigo todas las razas filtradas por id de la Api
async function getDogsById(id){
    let dogs = await getAllApiDogs()
    let dogId = dogs.find( e => {
        e.id === id
    })
    return dogId
}

async function syncTemperaments(){
    //creo un array para guardar los temperamentos
    let temperaments = []
     //hago request a la api para traer todos los perros
    let dogsList = await  axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    //guardo la data de la Api como array
    dogsList = dogsList.data
    //mapeo para hacer un array de cada temperamento, los spliteo por ',' y le quito los espacios en blanco
    dogsList.map(element => {
        if(element.temperament) {
            let tempArray = element.temperament.split(',').map(e => e.trim())
            temperaments = [...temperaments, ...tempArray]
        }
    })
    //lo convierto en un set para quitar los repetidos y los ordeno por orden alfabético
    temperaments = [...new Set(temperaments.sort())]
    //creo temperamentos
    temperaments.map(t => {
        Temperament.create({
        name: t
        })
    })
   
}

module.exports = {
    getAllApiDogs,
    getAllSqlDogs,
    getApiDogsByName,
    getSqlDogsByName,
    getDogsByPk,
    getDogsById,
    getTemperamentsName,
    getTemperamentsById,
    syncTemperaments
}
