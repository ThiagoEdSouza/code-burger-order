import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Logo from '../../assets/burger.png'
import { H1 } from '../../components/Title/styles'
import { BoxItens } from '../../components/BoxItens/styles'
import { Button } from '../../components/Button/styles'

import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles'

const App = () => {

  const [orders, setOrders] = useState([])
  const history = useHistory()

  const inputOrder = useRef()
  const inputClientName = useRef()

    async function addNewOrder() {
     const { data: newOrder } = await axios.post("http://localhost:3050/orders" , {
       order: inputOrder.current.value, 
       clientName: inputClientName.current.value,

     });

    
 setOrders([ ...orders, newOrder])

     history.push('/Orders')
  }

  return (
    <Container>

      <Image
        alt='logo_code_burger'
        src={Logo}
      />

      <BoxItens>
        
        <H1>Faça Seu Pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Digite Seu Pedido'></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputClientName} placeholder='Digite Seu Nome'></Input>
        
        <Button onClick={addNewOrder}>Finalizar o Pedido</Button>
    
      </BoxItens>
    </Container>
  )
}

export default App