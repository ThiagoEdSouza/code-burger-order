import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
background: ${ props => props.isBack ? 'transparent' : '#D93856' } ;
border-radius: 14px;
border: ${ props => props.isBack ? 'solid 1px #FFFFFF' : 'none' };
font-weight: 700;
font-size: 17px;
line-height: 28px;
display: flex;
align-items: center;
gap: 10px;
color: #FFFFFF;
margin-top: 68px;
justify-content: center;
cursor: pointer;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.4;


    img{
    transform: ${props => props.isBack && 'rotate(180deg)'};
}

 }
`;

