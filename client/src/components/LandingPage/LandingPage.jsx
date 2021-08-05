import React from 'react'
import { Link } from 'react-router-dom'



export default function LandingPage() {
    return(
        <>
            <h1>Welcome to DoggieLand</h1>
            <Link to='/home'>
                <button>Get In!</button>
            </Link>
        </>
    )
}