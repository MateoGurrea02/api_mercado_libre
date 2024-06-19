import React, { useState } from 'react';
import useFetch from '../hooks/use-fetch';
import obtenerProductosLocalStorage from '../utilities/obtenerProductosLocalStorage';
import guardarProductosLocalStorage from '../utilities/guardarProductoLocalStorage';
import Toast from './Toast';

const DetalleProducto = ({ producto }) => {
  const urlDescription = `https://api.mercadolibre.com/items/${producto.id}/description`
  const { data: data_description, isLoading, error } = useFetch(urlDescription)
  let cantidad = 1

  const addToCart = () => {
    let product = {
      id: producto.id,
      titulo: producto.title,
      precio: producto.price,
      imagen: producto.pictures ? producto.pictures[0].url : (producto.thumbnail), //Corregir producto.pictures[0].url porque no funciona, solo funciona el thumbnail
      cantidad: parseInt(cantidad)
    }

    if (obtenerProductosLocalStorage() == []) {
      guardarProductosLocalStorage([product]);
    } else {
      if (obtenerProductosLocalStorage().some((prod) => prod.id === producto.id)) {
        let lista = obtenerProductosLocalStorage().filter((prod) => prod.id != producto.id)
        lista.push(product)
        guardarProductosLocalStorage(lista)
        Toast('Agregado') //Pruebas Toast (este ejemplo no anda)
        
      }
      else {
        let lista = obtenerProductosLocalStorage()
        lista.push(product)
        guardarProductosLocalStorage(lista)
        Toast('Agregado') //Pruebas Toast (este ejemplo no anda)
      }
    }
  }
  return (
    <div className="max-w-6xl mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 center">
          <img src={
            producto.pictures ? producto.pictures[0].url  //Corregir producto.pictures[0].url porque no funciona, solo funciona el thumbnail
              : (producto.thumbnail)}
            alt={producto.title} className="w-auto h-auto object-cover rounded-lg" /> 
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold text-gray-900">{producto.title}</h1>
          <p className="text-xl text-gray-800 mt-2">${producto.price}</p>
          <p className={`mt-2 ${producto.initial_quantity > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {producto.initial_quantity > 0 ? `Stock Disponible` : 'Fuera de Stock'}
          </p>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Cantidad</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={producto.initial_quantity}
              defaultValue="1"
              className="mt-1 block w-24 p-2 border border-gray-300 rounded-md"

              onChange={(e) => { cantidad = e.target.value }}

            />
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Comprar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={addToCart}>
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Descripcion</h2>
        <p className="mt-2 text-gray-700">{data_description.plain_text}</p>
      </div>
    </div>
  );
}

export default DetalleProducto;