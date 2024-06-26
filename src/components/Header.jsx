import logo from '../assets/logo.png';
import React, { useState, useEffect } from 'react';



function Header({getInputUser}) {
  const [ValorDeBusqueda, setValorDeBusqueda] = useState(''); 

  const handleInput = (e) => {
    setValorDeBusqueda(e.target.value)
  }

  const handleSubmit = () => {
    getInputUser(ValorDeBusqueda)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };


  return (
    <>
      <nav className='flex flex-row justify-between bg-yellow-300 p-5 items-center absolute top-0 inset-x-0'>
        <div className='basis-1/6 pr-5'>
          <a href="/">
            <img src={logo} alt="" className='w-40' />
          </a>
        </div>
        <div className='flex items-center basis-3/4 ml-10'>
          <input 
            type="text" 
            id="lupa"
            className='basis-2/4 shadow-md rounded-sm p-2 outline-none' 
            placeholder='Buscar productos,marcas y mas...' 
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => handleKeyDown(e)}
            />
          <label htmlFor="lupa" className='bg-white p-1 -m-1 rounded-sm cursor-pointer' onClick={() => handleSubmit()}>
            <div className='border-l-2 p-1 px-2 pl-3 border-inherit '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>
            </div>
          </label>
        </div>
        <div className='basis-2/2'>
          <a href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </a>
        </div>
      </nav>
    </>
  )
  
}


export default Header
