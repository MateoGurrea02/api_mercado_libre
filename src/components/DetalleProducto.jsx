import React from 'react';

const DetalleProducto = ({ producto }) => {
  return (
    <div className="max-w-6xl mx-auto mt-24 p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2">
          <img src={producto.imagen} alt={producto.titulo} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold text-gray-900">{producto.titulo}</h1>
          <p className="text-xl text-gray-800 mt-2">${producto.precio}</p>
          <p className={`mt-2 ${producto.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {producto.stock > 0 ? `Stock Disponible: ${producto.stock}` : 'Fuera de Stock'}
          </p>
          <div className="mt-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Cantidad</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={producto.stock}
              defaultValue="1"
              className="mt-1 block w-24 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Comprar
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-900">Descripcion</h2>
        <p className="mt-2 text-gray-700">{producto.descripcion}</p>
      </div>
    </div>
  );
}

export default DetalleProducto;