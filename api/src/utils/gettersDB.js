const {Dog, Temperament, Op} = require('../db')
const {getDogTemps} = require('./gettersTemperaments')
const{lifespanToArray, infoToArray} = require('./utils')

//traigo todas las razas de la DB
async function getAllSqlDogs() {
    let dogs = await Dog.findAll({include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },}) 
      
    dogs = dogs.map(e =>{
        return{
            id: e.id,
            name: e.name,
            height: infoToArray(e.height),
            weight: infoToArray(e.weight),
            life_span: lifespanToArray(e.life_span), 
            temperament: e.temperaments.map(t => t.name)
        }
    })
    return dogs
}

//traigo las razas filtradas por nombre de la DB
async function getSqlDogsByName(name){
    let dogs = await Dog.findAll({
        where: { name: {[Op.iLike]: `%${name}%`} },
        include: {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    dogs = dogs.map(e =>{
        return{
            id: e.id,
            name: e.name,
            height: infoToArray(e.height),
            weight: infoToArray(e.weight),
            life_span: lifespanToArray(e.life_span), 
            temperament: e.temperaments.map(t => t.name)
        }
    })
    return dogs
}

//traigo todas las razas filtradas por id de la DB
async function getDogsByPk(pk){
    let dog = await Dog.findByPk(pk, { include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },})

    console.log(dog)
    dog = {
        id: dog.id,
        name: dog.name, 
        height: infoToArray(dog.height),
        weight: infoToArray(dog.weight),
        life_span: lifespanToArray(dog.life_span),
        image: dog.image,
        temperament: dog.temperaments.map(t => t.name)
    }
    return [dog]
}

module.exports={
    getAllSqlDogs,
    getSqlDogsByName,
    getDogsByPk
}