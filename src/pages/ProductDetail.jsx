import React from 'react';
import DetalleProducto from '../components/DetalleProducto'
import Header from '../components/Header';

function ProductDetail() {

  return (
    
    <div className='flex-col'>
      <Header getInputUser={getInputUser}/>
      <DetalleProducto ></DetalleProducto>
    </div>

  )
}

export default ProductDetail