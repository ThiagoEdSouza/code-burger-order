import styled from 'styled-components'
import Background from '../../assets/background-2.png'

export const Container = styled.div`
align-items: center;
margin: auto;
background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 44.74px;
height: 100%;
min-height: 100vh;
`;

export const Image = styled.img`
width: 246px;
height: 354px;
`;




export const Order = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;
margin-top: 5%;

p {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #FFFFFF;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}
`;
