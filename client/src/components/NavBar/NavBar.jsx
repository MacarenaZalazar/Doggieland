import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'


export default function NavBar() {
    return (
        <>
        <div className='nav-container'>
            <Link to='/home'>
            <h1>Home</h1>
            </Link>
            <Link to='/create'>
            <h1>Create</h1>
            </Link>
        </div>
        </>
)

}