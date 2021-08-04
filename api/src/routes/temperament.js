const { Router } = require('express');
const router = Router()
const { getTemperamentsName } = require('../utils/getters')

router.get('/', async (req,res) =>{
    try {
        let temperaments = await getTemperamentsName()
        res.send(temperaments)
    } catch (error) {
        
    }
})

module.exports = router