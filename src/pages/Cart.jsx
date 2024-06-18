import React from 'react';
import DetalleCarrito from '../components/DetalleCarrito'
import Header from '../components/Header';
import obtenerProductosLocalStorage from '../utilities/obtenerProductosLocalStorage';

function Cart() {
  let products = obtenerProductosLocalStorage()
  return (
    <div className='mx-auto justify-items-center'>
      <Header ></Header>
      <DetalleCarrito itemsCarrito={products}/>
    </div>

  )
}

export default Cart