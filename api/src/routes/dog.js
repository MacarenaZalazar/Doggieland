const { Router } = require('express');
const router = Router()

router.post('/', async (req,res) =>{
    res.send('estoy en post /dog')
})






module.exports = router