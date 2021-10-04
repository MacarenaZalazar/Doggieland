const { Router } = require('express');
const router = Router()
const { getTemps } = require('../utils/routesFunctions')
const {getTemperamentsName} = require ('../utils/gettersTemperaments')

router.get('/', async(req, res, next) => {
    try {
        const temps = await getTemperamentsName()
        res.send(temps)
    } catch (error) {
        next(error)
    }
})

module.exports = router