const { Router } = require('express');
const router = Router()
const {postBreed} = require('../utils/routesFunctions')

router.post('/', async (req,res, next) =>{
    const {name, height, weight, life_span, image, temperament} = req.body
    try {
        const newDog = await postBreed(name, height, weight, life_span, image, temperament)
        res.send(newDog)
    } catch (error) {
        next(error)
    }    
})






module.exports = router