import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import { useDispatch } from 'react-redux';
import { clearIdBreed } from '../../actions';


export default function NavBar() {
    const dispatch = useDispatch()
    function handleClick(e){
        dispatch(clearIdBreed())
    }
    return (
        <>
        <div className='nav-container'>
            <Link to='/home'>
            <h1 onClick={handleClick} className='buttonNav'>Home</h1>
            </Link>
            <Link to='/create'>
            <h1 className='buttonNav'>Create</h1>
            </Link>
        </div>
        </>
)

}