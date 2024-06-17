import React from 'react';
import DetalleCarrito from '../components/DetalleCarrito'
import Header from '../components/Header';

function Cart() {
  let producto = [
    {
    title:'Remera roja',
    image:'imagen.jpg',
    price: 5000,
    cantidad:2,
    }
  ]
  return (
    
    <div className='flex-col'>
      <Header/>
      <DetalleCarrito itemsCarrito={producto}/>
    </div>

  )
}

export default Cart