import React from 'react';
import { ContainerDiv, NavLink, Title } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { clearIdBreed } from '../../actions';
import { Link } from 'react-router-dom';


export default function NavBar() {
    const {breeds} = useSelector(state=> state)
    const dispatch = useDispatch()
    function handleClick(e){
        dispatch(clearIdBreed())
    }
    
    return (
        breeds.length > 0 && <> 
            <ContainerDiv>
                <NavLink onClick={handleClick} >
                    <Link to='/doggieland'>
                        Home
                    </Link>
                </NavLink>
                    <Title>Doggieland</Title>
                <NavLink onClick={handleClick}>
                    <Link to='/doggieland/create'>
                         Create
                    </Link>
                </NavLink>
            </ContainerDiv>
        </>
    )
}