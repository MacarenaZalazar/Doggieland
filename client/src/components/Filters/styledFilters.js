import styled from 'styled-components';

export const FilterDiv = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;
    span{
        font-size: 25px;
        padding: 5px;
    }
    .otroDivContainer{
        display: flex;
        align-items: center;
        margin: 5px;
        justify-content: space-between;
    }
    
    .filterClass{
        padding: 10px;
    }
    
    .filterSelect{
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            font-size: 20px;
        } 
        button{
            font-family: 'Amatic SC', cursive;
            font-size: 18px;
            cursor: pointer;
            margin: 0 2px;
            padding: 5px 5px;
            box-shadow: transparent;
            border-radius: 25px;
            border: 1px solid #d4c4b5;
            background-color: #d4c4b5;
            height: 40px;
            :hover{
                font-size: 22px;
                width: 60px;
                height: 50px;
                border-radius: 30px;
                background-color: white;
            }
        }  
        input{
            width: 100px;
        }
        p{
            padding: 5px;   
        }             
    }
`