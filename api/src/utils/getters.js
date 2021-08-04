const axios = require('axios');
const {YOUR_API_KEY} = process.env
const {Dog, Temperament, Op} = require('../db')




//convierto en array los temperamentos traidos de la Api
function tempToArray (temps){
    let array
    if(temps){
       array =  temps.split(',').map(e => e.trim())
    }
    return array
}

//mapeo para que solo me venga la info que necesito de la Api
function mapping(doggies){
    
    let dogsList = doggies.map(e => {
        let tempArray = tempToArray(e.temperament)
        return { 
            id: e.id, 
            name: e.name, 
            height: e.height.metric, 
            weight: e.weight.metric, 
            life_span: e.life_span,
            image:e.image.url,
            temperament: tempArray
        }
    })
    return dogsList
}

//traigo los nombres de los temperamentos de la DB
async function getTemperamentsName(){
    let temp =  await Temperament.findAll()
    temp = temp.map(e => e.name)
    return temp
}

//traigo los temperamentos según su nombre de la DB
async function getTemperamentsById(array){
        let temp = await Temperament.findAll({raw: true, where: { name: {[Op.or]: array } } })
        temp = temp.map(e => e.id)
        return temp
        
 
}

//traigo todas las razas de la Api
async function getAllApiDogs() {
    let dogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    dogs = mapping(dogs.data)
    return dogs
}

//traigo todas las razas de la DB
async function getAllSqlDogs() {
    let dogs = await Dog.findAll()
    return dogs
}

//traigo las razas filtradas por nombre de la DB
async function getSqlDogsByName(name){
    let dogs = await Dog.findAll({ where: { name: {[Op.like]: `%${name}%`}}})
    return dogs
}

//traigo todas las razas filtradas por nombre de la Api
async function getApiDogsByName(name){
    let dogs = await getAllApiDogs()
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
    id = parseInt(id)
    console.log(typeof id)
    let dogId = dogs.filter( e => e.id === id)
    console.log(dogId)
    return dogId
}

async function syncTemperaments(){

    try {
         //creo un array para guardar los temperamentos
    let temperaments = []
    //hago request a la api para traer todos los perros
   let dogsList = await getAllApiDogs()
   console.log(dogsList)
   //mapeo para hacer un array de cada temperamento
   dogsList.map(e => {
       if(e.temperament) {
           temperaments = [...temperaments, ...e.temperament]
       }
   })
   
   //lo convierto en un set para quitar los repetidos y los ordeno por orden alfabético
   temperaments = [...new Set(temperaments.sort())]
   console.log(temperaments)
   //creo temperamentos
   temperaments.map(t => {
       Temperament.create({
       name: t
       })
   })
        
    } catch (error) {
        console.log(error)
    }
   
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
