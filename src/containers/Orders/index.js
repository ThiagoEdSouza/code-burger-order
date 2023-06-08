import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Package from '../../assets/package-burger.png'
import Trash from '../../assets/trash.png'
import { H1 } from '../../components/Title/styles'
import { BoxItens } from '../../components/BoxItens/styles'
import { Button } from '../../components/Button/styles'

import {
  Container,
  Image,
  Order
} from './styles'

const Orders = () => {

  const [orders, setOrders] = useState([])

  const history = useHistory()

  useEffect(() =>{

    async function fetchOrders(){
      const {data: newOrders} = await axios.get("http://localhost:3050/orders") // Criamos a variável e indicamos o endereço do nosso back-end
	
    setOrders(newOrders); // Chamamos a variável criada para aparecer na tela da aplicação
    }
    fetchOrders()

  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3050/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)

    setOrders(newOrders);
  }

  function goBackPage(){
    history.push("/")
  }

  return (
    <Container>

      <Image
        alt='package_order'
        src={Package}
      />

      <BoxItens isBlur={true}>
        <H1>Pedidos</H1>

        
        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <div className='dataOrder'>
              <p>{order.order}</p>
              <div className='clientName'>
              <p>{order.clientName}</p>
              </div>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt='lixeira' /></button>
            </Order>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>Voltar
        </Button>

      </BoxItens>
    </Container>
  )
}

export default Orders;