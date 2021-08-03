const { Router } = require('express');
const router = Router()
const e = require('express');
const { getAllApiDogs, getAllSqlDogs, getSqlDogsByName, getApiDogsByName, getDogsByPk, getDogsById } = require('../utils/getters')

router.get('/', async (req,res) =>{
    const {name} = req.query
    let breeds, sqlBreeds, apiBreeds

    if(name){
        sqlBreeds = await getSqlDogsByName(name)
        apiBreeds = await getApiDogsByName(name)
    } else {
        sqlBreeds = await getAllSqlDogs()
        apiBreeds = await getAllApiDogs()
    }

    breeds = [...psqlBreeds,...apiBreeds]

    if(breeds.length>0) {
        res.send(breeds)
    } else {
        res.status(400).send("There's no breed that matches")
    }
})



router.get('/:idRaza', async (req, res) => {
    const { idRaza } = req.params
    //res.send('estoy en get / idRaza')
    let dog
    if(idRaza.length < 10){ 
        dog = await getDogsById(idRaza)
    } else {
        dog = await getDogsByPk(idRaza)
    }
    if(dog){
        res.send(dog)
    } else {
        res.status(400).send("There's no id that matches")
    }
})



module.exports = router