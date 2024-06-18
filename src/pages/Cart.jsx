import React from 'react';
import DetalleCarrito from '../components/DetalleCarrito'
import Header from '../components/Header';
import obtenerProductosLocalStorage from '../utilities/obtenerProductosLocalStorage';
import guardarProductosLocalStorage from '../utilities/guardarProductoLocalStorage';

function Cart() {
  let products = obtenerProductosLocalStorage()
  return (
    <div className='flex-col'>
      <Header></Header>
      <DetalleCarrito itemsCarrito={products}/>
    </div>

  )
}

export default Cart