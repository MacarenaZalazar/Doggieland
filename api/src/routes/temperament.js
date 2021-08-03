const { Router } = require('express');
const router = Router()
const { getTemperamentsName } = require('../utils/getters')

router.get('/', async (req,res) =>{
    let temperaments = await getTemperamentsName()
    res.send(temperaments)
})

module.exports = router