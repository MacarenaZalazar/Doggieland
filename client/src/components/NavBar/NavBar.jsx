import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { clearIdBreed } from '../../actions';


export default function NavBar() {
    const {breeds} = useSelector(state=> state)
    const dispatch = useDispatch()
    function handleClick(e){
        dispatch(clearIdBreed())
    }
    
    return (
        breeds.length > 0 && <> 
            <div className='nav-container'>
                <Link to='/doggieland'>
                    <h1 onClick={handleClick} className='buttonNav'>Home</h1>
                </Link>
                    <h1>Doggieland</h1>
                <Link to='/doggieland/create'>
                    <h1 onClick={handleClick} className='buttonNav'>Create</h1>
                </Link>
            </div>
        </>
    )
}