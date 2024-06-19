import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardProduct from '../components/CardProduct'
import Loader from '../components/Loader';
import useFetch from '../hooks/use-fetch';


function Home() {
  const [inputUser, setInputUser] = useState('')
  const [iSearch, setISearch] = useState(false)
  const [offSet, setOffSet] = useState(0)
  const [contadorPagina, setContadorPagina] = useState(1)
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}&offset=${offSet}&limit=${iSearch ? 8 : 4}`
  const { data, isLoading, error } = useFetch(url)

  const getInputUser = (inputUser) => {
    setInputUser(inputUser)
    setISearch(true)
  }

  const handleOffset = (isForward, jumps) => {
    if (isForward) {
      setOffSet(offSet + jumps)
      setContadorPagina(contadorPagina + 1)
    } else {
      contadorPagina > 1 ? setOffSet(offSet - jumps) : setOffSet(0)
      contadorPagina > 1 ? setContadorPagina(contadorPagina - 1) : setContadorPagina(1)
    }
  }

  return (

    <div className='flex flex-col'>
      <Header getInputUser={getInputUser} />
      <div className="flex justify-center flex-wrap mt-40">
        {!isLoading ?
          data.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
            />))
          :
          <Loader />
        }
      </div>
      {iSearch ? 
        <div className='flex justify-center mt-5 mb-10'>
          <div className="flex justify-items-center">
            <div className='cursor-pointer rotate-180' onClick={() => iSearch ? handleOffset(false, (iSearch ? 8 : 4)) : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <p className='mx-2 text-2xl'>{contadorPagina}</p>
            <div className='cursor-pointer' onClick={() => iSearch ? handleOffset(true, (iSearch ? 8 : 4)) : ''}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>
      :
      ''
      }  
    </div>
  )
}

export default Home
