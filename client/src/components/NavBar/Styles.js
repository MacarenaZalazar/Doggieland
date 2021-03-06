import styled from 'styled-components'

export const ContainerDiv = styled.div`
background-color: #fef8d5;
display: flex;
justify-content: space-around;
text-align: center;
align-items: center;
border-bottom: #7D732F 1px solid;
font-size: small;
position: fixed;
width: 100%;
min-height: 80px;
top: 0; right: 0
    .title{
        font-size: 50px;
    }
`
export const Title = styled.h1`
    font-size: 50px;
`
export const NavLink = styled.div`
    a{
        text-decoration: none;
        color: black;
        text-align: center;
        margin: 8px 20px;
        font-size: 30px;
        padding: 15px 10px;
        border-radius: 50px;
        background: #d4c4b5;
        border: 1px solid #d4c4b5;
        :hover{
            border-radius: 70px;
            width: 60px;
            height: 30px;
            font-size: 35px;
            background-color: white;
        }
    }
`