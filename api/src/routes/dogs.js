const { Router } = require('express');
const router = Router()
const {Dog, Op} = require('../db')
const {YOUR_API_KEY} = process.env
const axios = require('axios')

router.get('/', async (req,res) =>{
    const {name} = req.query
    let breeds, apiBreeds, psqlBreeds
    
    if(name){
        res.send(name + ' estoy en /dogs/query')
        psqlBreeds = await Dog.findAll({
            where: {
                name: {[Op.like]: `%${name}%`}
            }
        }) 

    } else {
    
        apiBreeds = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
        apiBreeds = apiBreeds.data.map(e => e.name)
        psqlBreeds = await Dog.findAll()       
    }
    breeds = [...psqlBreeds.map(e=> e.name), ...apiBreeds]
    res.send(breeds)

})


router.get('/:idRaza', async (req, res) => {
    const { idRaza } = req.params
    //res.send('estoy en get / idRaza')
    let dog
    console.log(idRaza)
    if(idRaza.length < 10){ 
        dog = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
        dog = dog.data.find(el => el.id == idRaza)
        res.send(dog)
        //console.log(dog)
        //res.send(dog)
    } else {
        res.send('en la base de datos')
    }
        dog = await Dog.findByPk(idRaza)
    res.send(dog)
})



module.exports = router