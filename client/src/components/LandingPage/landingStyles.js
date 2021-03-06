import styled from 'styled-components';

export const HeroDiv = styled.div`
padding-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
background: #ffde15 url('https://cdn.pixabay.com/photo/2021/01/23/07/53/dogs-5941898_960_720.jpg') no-repeat center; 
background-size: contain;
height: 100%;
    a{
        display: block;
    }
    h1{
        font-family: 'Amatic SC', cursive;
        font-size: 60px;
        margin: 15px;
    }
    span{
        font-size: 70px;
    }
    button{
        cursor: pointer;
        text-align: center;
        margin: 5px 20px;
        margin-bottom: 105px;
        padding: 10px ;  
        padding: 15px 10px;
        border-radius: 50px;
        background: #d4c4b5;
        border: 1px solid #d4c4b5;
        font-family: 'Amatic SC', cursive;
        font-size: 30px;
        height: 90px;
        width: 90px;
        color: #000;
        :hover{
            font-size: 40px;
            height: 110px;
            width: 110px;
            background-color: white;
        }
    }
body{
    height: 100%;
}

`
