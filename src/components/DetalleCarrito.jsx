import React, { useState } from 'react';
import guardarProductosLocalStorage from '../utilities/guardarProductoLocalStorage';
import obtenerProductosLocalStorage from '../utilities/obtenerProductosLocalStorage';

const Carrito = () => {
    const itemsCarrito = obtenerProductosLocalStorage()
    // Calcular el subtotal, cantidad total y total
    const subtotal = itemsCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const totalItems = itemsCarrito.reduce((acc, item) => acc + item.cantidad, 0);
    const envio = 5000; // Suponiendo un costo de envío fijo
    const total = subtotal + envio;

    const [carrito, setCarrito] = useState(obtenerProductosLocalStorage())

    //ya funciona hiciste cualquier cosa con esa lista que le metias xd JAJAJAJAJ
    const incrementarCantidad = (index) => {
        const nuevoCarrito = itemsCarrito
        nuevoCarrito[index].cantidad += 1
        setCarrito(nuevoCarrito)
        guardarProductosLocalStorage(nuevoCarrito)
    }

    //Lo mismo que te puse arriba
    const decrementarCantidad = (index) => {
        const nuevoCarrito = itemsCarrito
        if (nuevoCarrito[index].cantidad > 1) {
            nuevoCarrito[index].cantidad -= 1
            setCarrito(nuevoCarrito)
            guardarProductosLocalStorage(nuevoCarrito)
        }
    }

    //El eliminar funciona
    const eliminarProducto = (index) => {
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        setCarrito(nuevoCarrito)
        guardarProductosLocalStorage(nuevoCarrito)
    }

    const finishSell = ()=>{
        localStorage.clear()
    }

    return (
        <div className=" flex flex-col md:flex-row max-w-6xl m-24 p-6 bg-white shadow-md rounded-lg ">
            <div className="md:w-2/3">
                {itemsCarrito.map((item, index) => (
                    <div key={index} className="flex border rounded-lg py-16 mb-4">
                        <img src={item.imagen} alt={item.titulo} className="w-20 h-20 mx-4 object-cover rounded" />
                        <div className=" flex-grow">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-bold">{item.titulo}</h2>
                                <div class="flex items-center border-gray-100">
                                    <form class="max-w-xs mx-auto px-10">
                                        <div class="relative flex items-center max-w-[8rem]">
                                            <button onClick={() => decrementarCantidad(index)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <p className='px-5 py-2 border rounded-lg'>{item.cantidad}</p>
                                            {/* <input type="text" id="quantity-input" aria-describedby="helper-text-explanation" value={'hola'} class="bg-gray-50 border-x-0 border-gray-300 h-11 w-10 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999"/> */}
                                            <button onClick={() => incrementarCantidad(index)} type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                    <p className="text-lg px-10">${item.precio}</p>
                                </div>
                            </div>
                            <a href="" onClick={() => eliminarProducto(index)} className='text-blue-400'>Eliminar</a>
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
                        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={finishSell}>
                            Continuar compra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
