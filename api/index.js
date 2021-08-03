//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { default: axios } = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Temperament} = require('./src/db')
const {YOUR_API_KEY} = process.env

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    //creo un array para guardar los temperamentos
    let temperaments = []
    //hago request a la api para traer todos los perros
    axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
      .then((data) => {
        //guardo la data de la Api como array
        const dogsList = data.data
        //mapeo para hacer un array de cada temperamento, los spliteo por ',' y le quito los espacios en blanco
          dogsList.map(element => {
            if(element.temperament) {
              let tempArray = element.temperament.split(',').map(e => e.trim())
              temperaments = [...temperaments, ...tempArray]
            }
          })
          //lo convierto en un set para quitar los repetidos y los ordeno por orden alfabético
          temperaments = [...new Set(temperaments.sort())]
          //creo temperamentos
          temperaments.map(t => {
              Temperament.create({
                name: t
              })
          })
     
      })
      .catch(e => console.log(e))
      //catcheo el error porlas    
  })
});
