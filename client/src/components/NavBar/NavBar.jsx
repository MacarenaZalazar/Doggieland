import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <>
        <Link to='/breeds'>
            <h1>Get All Breeds!</h1>
        </Link> 
        <p>Soy NavBar</p>
        </>
)

}