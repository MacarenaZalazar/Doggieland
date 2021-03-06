import styled from 'styled-components'

export const DetailPage = styled.div`
    font-family: 'Amatic SC', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150px;
`

export const DetailContainer = styled.div`
    border: 1px solid #7D732F;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff7d5;
    border-radius: 15px;
    padding: 15px 10px;
    height: 400px;
    margin: 10px 0;
    width: 400px;
    h1{
        font-size: 30px;
    }
    h3{
        padding: 3px 0;
        font-size: 20px;
    }    
    img{
        margin: 5px 0;
        border-radius: 10px;
        width: auto;
        max-width: 90%;
        max-height: 125px;
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
`