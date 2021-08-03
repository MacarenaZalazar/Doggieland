const { Router } = require('express');
const router = Router()
const { Temperament } = require('../db.js')

router.get('/', async (req,res) =>{
    var temperaments = await Temperament.findAll()
    temperaments = temperaments.map(t => t.name)
    res.send(temperaments)
})

module.exports = router