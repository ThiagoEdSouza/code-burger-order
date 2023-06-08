import styled from 'styled-components'

export const BoxItens = styled.div`
width: 414px;
height: 645px;
padding: 50px 36px;
border-radius: 33px;


${props => props.isBlur && `
    backdrop-filter: blur(22.5px);
` }

`;