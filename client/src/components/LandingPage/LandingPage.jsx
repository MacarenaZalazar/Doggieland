import React from 'react'
import { Link } from 'react-router-dom'
import { HeroDiv } from './landingStyles';

export default function LandingPage() {
    return(
        <HeroDiv>
            <h1>Welcome to <span>DoggieLand</span></h1>
            <Link to='/doggieland'>
                <button>Get In!</button>
            </Link>
        </HeroDiv>
    )
}