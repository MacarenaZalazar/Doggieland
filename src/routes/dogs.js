const { Router } = require('express');
const router = Router()
const e = require('express');
const { getBreedsByName, getAllBreeds, getBreedById } = require('../utils/routesFunctions')

router.get('/', async (req,res, next) =>{
    const {name} = req.query
    let breeds
    try {
        if(name){
           breeds = await getBreedsByName(name)
        } else {
          breeds = await getAllBreeds()
        }
        if(breeds.length>0) {
            res.send(breeds)
        } else {
            res.status(400).send("There's no breed that matches")
        }
    } catch (error) {
        next(error)
    }
})


router.get('/:idRaza', async (req, res, next) => {
    const { idRaza } = req.params
    let dog
    try {
        dog = await getBreedById(idRaza)
        if(dog.length>0){
            res.send(dog)
        } else {
            res.status(400).send("There's no id that matches")
        }
    } catch (error) {
        next(error)
    }  
})



module.exports = router