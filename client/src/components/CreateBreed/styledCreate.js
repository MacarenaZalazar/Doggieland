import styled from 'styled-components';

export const CreatedDiv = styled.div`
    label{
        padding: 0 5px;
        font-size: 25px;
    }
    span{
        font-size: 20px;
    }
    input.danger{
        border: 2px solid red;
    }
`
export const Errors = styled.div`
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    p{
        padding: 3px
    }
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: max-content;
    h3{
        margin: 0 10px
    }
`

export const BodyForm = styled.div`
    font-family: 'Amatic SC', cursive;
    padding: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 40px;
    }
    button{
        font-size: 20px;
        font-family: 'Amatic SC', cursive;
        margin: 0 2px;
        padding: 5px 5px;
        box-shadow: transparent;
        border-radius: 20px;
        border: 1px solid #d4c4b5;
        background-color: #d4c4b5;
        :hover{
            font-size: 25px;
            height: 50px;
            width: 85px;
            border-radius: 50px;
            background-color: white;
        }
        :disabled{
            background-color: #d4c4b5 ;
        }
    }
    
`

export const CreateFormContainer = styled.div`
    background-color: #fef8d5;
    padding: 30px 10px;
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 400px;
    min-height: 300px;
    border-radius: 15px;
`
export const CreateFormDiv = styled.div`
    padding: 5px;    
    input{
        padding: 0 5px;
        width: 20px;
    }
`

export const CreateSelectDiv = styled.div`
    padding: 5px;
`
export const CreateNameDiv = styled.div`
    padding: 5px;
    span{
        padding: 3px;
        font-size: 18px;
    }
    button{
        font-family: 'Amatic SC', cursive;
        text-align: center;
        font-size: 12px;
        padding: 0;
        width: 18px;
        height: 18px;
        border-radius: 10px;
        :hover{
            width: 30px;
            height: 30px;
            
        }
    }
`

export const NewBreed = styled.div`
    button{
        font-size: 20px;
        height: 40px;
        width: 120px;
        :hover{
            font-size: 25px;
            height: 50px;
            width: 140px;
        }
    }
`

