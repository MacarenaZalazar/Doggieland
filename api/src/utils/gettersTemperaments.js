const {Temperament, dog_temperament, Op} = require('../db')
const {getAllApiDogs} = require('./gettersApi')


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

//busco los temperamentos en la tabla intermedia
async function getDogTemps(id){
    let temps = await dog_temperament.findAll({raw: true, where: { dogId: id } })
    temps = temps.map(e => e.temperamentId)
    temps = await getDogTempsName(temps)
    return temps
}


//traigo los temperamentos por nombre
async function getDogTempsName(array){
    let temp = await Temperament.findAll({raw: true, where : { id: {[Op.or]: array }}})
    temp = temp.map(e => e.name)
    return temp
}

//creo los temperamentos cuando comienza la sincronización
async function syncTemperaments(){
    try {
         //creo un array para guardar los temperamentos
        let temperaments = []
        //hago request a la api para traer todos los perros
        let dogsList = await getAllApiDogs()
        //mapeo para hacer un array de cada temperamento
        dogsList.map(e => {
            if(e.temperament) {
            temperaments = [...temperaments, ...e.temperament]
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
    }catch (error) {
        console.log(error)
    }
}




module.exports = {
    getTemperamentsName,
    getTemperamentsById,
    syncTemperaments,
    getDogTemps
}