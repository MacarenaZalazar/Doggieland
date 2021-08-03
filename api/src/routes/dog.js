const { Router } = require('express');
const router = Router()
const { Dog } = require('../db')

router.post('/', async (req,res) =>{
    const {name, height, weight, lifespan} = req.body
    const newDog = await Dog.findOrCreate({
        where: {
            name, height, weight, lifespan
        }
    })
    res.send(newDog)
})






module.exports = router