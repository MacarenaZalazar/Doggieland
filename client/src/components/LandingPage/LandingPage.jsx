import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'



export default function LandingPage() {
    return(
        <div className='ladingDiv'>
            <h1>Welcome to <span>DoggieLand</span></h1>
            <Link to='/doggieland'>
                <button>Get In!</button>
            </Link>
        </div>
    )
}