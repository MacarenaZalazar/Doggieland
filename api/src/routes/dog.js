const { Router } = require('express');
const router = Router()
const { Dog } = require('../db')
const {getTemperamentsById} = require('../utils/getters')

router.post('/', async (req,res) =>{
    const {name, height, weight, life_span, image, temperament} = req.body
    let temperamentId =  await getTemperamentsById(temperament)
    const newDog = await Dog.findOrCreate({raw: true, 
        where: {
            name, height, weight, life_span, image
        }
    })

    await newDog[0].setTemperaments(temperamentId)
    console.log(newDog)
    res.send(newDog)
})






module.exports = router