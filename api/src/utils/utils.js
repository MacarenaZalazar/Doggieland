
//convierto los weight y los height en un array
function infoToArray(str){
    if(str){
        if(str.includes('-')){
        return str.split('-').map(e => e.trim())
      } else {
        return [str]
      } 
    }
}

//convierto life:span en un array
function lifespanToArray(lifespan){
    if(lifespan){
        let life = lifespan.split(' ')
        life = life.filter(e =>  {
            let ls = e.toLowerCase()
        return ls !== 'years' && ls !== '-' && ls !== '_' &&  ls !== '–'})
        return life
      }
}

//mapeo para que solo me venga la info que necesito de la Api
function mapping(doggies){
    
    let dogsList = doggies.map(e => {
        return { 
            id: e.id, 
            name: e.name, 
            height: e.height.metric,//infoToArray(e.height.metric), 
            weight: e.weight.metric,//infoToArray(e.weight.metric), 
            life_span: lifespanToArray(e.life_span),
            image:e.image.url,
            temperament: tempToArray(e.temperament)
        }
    })
    return dogsList
}

//convierto en array los temperamentos traidos de la Api
function tempToArray (temps){
    let array
    if(temps){
       array =  temps.split(',').map(e => e.trim())
    }
    return array
}

module.exports = {
    infoToArray,
    tempToArray,
    lifespanToArray,
    mapping
}