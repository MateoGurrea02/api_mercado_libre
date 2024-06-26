import React from 'react';
import DetalleProducto from '../components/DetalleProducto'
import Header from '../components/Header';
import useFetch from '../hooks/use-fetch';

function ProductDetail() {
  const productID = location.pathname.split('/')[2]
  const url = `https://api.mercadolibre.com/items/${productID}`
  const {data,isLoading,error} = useFetch(url)
  return (
    <div className='flex-col'>
      <Header></Header>
      <DetalleProducto producto={data}></DetalleProducto>
      {/* <Header getInputUser={getInputUser}/> */}
    </div>

  )
}

export default ProductDetail