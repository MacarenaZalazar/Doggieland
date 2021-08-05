import React  from 'react'



export default function Breeds(props) {
    console.log(props)
    const breeds = props.breeds
    const status = props.status
    return  breeds ? ( 
        <div> 
             { breeds.map(b => {
                 status === breeds.status &&
            <div> 
                 <Breed breeds={filtered} status='Filtered'/>   
                 <Breed breeds={breeds} status='All'/>
                <Link to={`/breedDetail/${b.id}`}>
                    <h3>{b.name}</h3>
                </Link>
            <img src={b.image} alt={b.name}/>
             <p>{(b.temperament) && b.temperament.toString()}</p>
            </div>
        }) } 
            </div>
        ) : (
            <p>loading</p>
        )
        
    
}




