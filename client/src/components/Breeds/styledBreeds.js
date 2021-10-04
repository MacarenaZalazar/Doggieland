import styled from 'styled-components';

export const BreedsCont = styled.div`
    padding-top: 200px;
`

export const DogsContainer = styled.div`
    font-family: 'Amatic SC', cursive;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;  
    padding: 0 10px;
`
export const DoggieDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff7d5;
    border-radius: 15px;
    padding: 15px 10px;
    height: 300px;
    margin: 10px 0;
    width: 300px;
    a{
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }
    button{
        font-family: 'Amatic SC', cursive;
        cursor: pointer;
        font-size: 15px;
        text-align: center;
        margin: 5px;
        background: #d4c4b5;
        color: #000;
        height: 30px;
        width: 70px;
        box-shadow: transparent;
        border-radius: 15px;
        border: 1px solid #d4c4b5;
        :hover{
            font-size: 18px;
            height: 35px;
            width: 80px;
            border-radius: 60px;
            background-color: white;
          
        }
    }
    h3{
        font-size: 30px;
    }
    p{
        font-size: 20px;
    }
    
`

export const DogImg = styled.div`
    img{
        margin: 5px 0;
        border-radius: 10px;
        width: auto;
        max-width: 90%;
        max-height: 125px;
    }
`

export const NotFound = styled.div`
    font-size: 30px;
    font-family: 'Amatic SC', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    button{
        font-family: 'Amatic SC', cursive;
        cursor: pointer;
        font-size: 25px;
        text-align: center;
        margin: 15px;
        background: #d4c4b5;
        color: #000;
        height: 50px;
        width: 70px;
        box-shadow: transparent;
        border-radius: 15px;
        border: 1px solid #d4c4b5;
        :hover{
            font-size: 30px; 
            background-color: white;
            height: 65px;
            width: 90px;
        }
    }
   
`