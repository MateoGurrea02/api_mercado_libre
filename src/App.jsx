import React from 'react'
import './App.css'
import Header from './components/Header'
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/DetalleCarrito';

function App() {
  const producto = {
    imagen: 'https://via.placeholder.com/1200',
    titulo: 'Titulo prueba',
    precio: 12424,
    stock: 20,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui consectetur earum est eaque, labore eveniet doloremque necessitatibus sequi quasi quis dolorem commodi exercitationem consequuntur quae at, nostrum eos. Magni, sequi!'
  };

  const itemsCarrito = [
    {
      imagen: 'https://via.placeholder.com/150',
      titulo: 'Product Prueba 1',
      cantidad: 2,
      precio: 52123
    },
    {
      imagen: 'https://via.placeholder.com/150',
      titulo: 'Vokeeeeeeeeee',
      cantidad: 1,
      precio: 7522
    },
  ];

  return (
    <>
      <Header />
      
      <Carrito itemsCarrito={itemsCarrito}/>
    </>
  );


}

export default App
