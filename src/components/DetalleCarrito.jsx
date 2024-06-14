
import React from 'react';

const Carrito = ({ itemsCarrito }) => {
    // Calcular el subtotal, cantidad total y total
    const subtotal = itemsCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalItems = itemsCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    const envio = 5000; // Suponiendo un costo de envío fijo
    const total = subtotal + envio;

    return (
        <div className="max-w-6xl mx-auto m-24 p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row">
            <div className="md:w-2/3">
                {itemsCarrito.map((item, index) => (
                    <div key={index} className="flex border rounded-lg py-16 mb-4">
                        <img src={item.image} alt={item.titulo} className="w-20 h-20 mx-4 object-cover rounded" />
                        <div className=" flex-grow">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-bold">{item.titulo}</h2>
                                <div class="flex items-center border-gray-100">
                                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                        <input id='cantidad'class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.cantidad} min="1" />
                                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    <p className="text-sm px-10">${item.precio}</p>
                                </div>
                            </div>
                            <a href=""className='text-blue-400'>Eliminar</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="md:w-1/3 md:pl-6 mt-6 md:mt-0">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="text-xl font-bold text-gray-900">Resumen de compra</h2>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-700">Productos ({totalItems})</p>
                            <p className="text-sm text-gray-700">${subtotal.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-sm text-gray-700">Envio: </p>
                            <p className="text-sm text-gray-700">${envio.toFixed(2)}</p>

                        </div>
                        <hr class="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold text-gray-900 mt-2">Total: </p>
                            <p className="text-lg font-bold text-gray-900 mt-2">${total.toFixed(2)}</p>

                        </div>
                        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Continuar compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
