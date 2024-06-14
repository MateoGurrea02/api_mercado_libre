import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import CardProduct from '../components/CardProduct'
import FetchData from '../components/FetchData';
import Loader from '../components/Loader';


function Home() {
  const [data, setData] = useState(null)
  const [inputUser, setInputUser] = useState('')
  const [iSearch, setISearch] = useState(false)
  const [offSet, setOffSet] = useState(0)
  const [contadorPagina, setContadorPagina] = useState(1)

  const getInputUser = (inputUser) => {
		setInputUser(inputUser)
    setISearch(true)
	}

  const getData = async () => {
    try {
      const response = await FetchData(`https://api.mercadolibre.com/sites/MLA/search?q=${inputUser}&offset=${offSet}&limit=${iSearch ? 8 : 4}`);
      setData(response)
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  useEffect(() => {
    if (inputUser == null || inputUser == "") {
		}
		else {
      getData();
		}
	}, [inputUser,offSet]);

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
    
    <div className='flex-col'>
      <Header getInputUser={getInputUser}/>
      <div className="flex justify-center flex-wrap absolute top-40 ">
        {data ? data.results.map((product)=> (<CardProduct key={product.id} product={product}/>)) 
        : 
        (iSearch ? 
          <Loader/> 
          : 
          <h1>Que tal</h1>
        )}
      </div>
      <div className='flex justify-center py-5'>
					<div className=' cursor-pointer rotate-180 my-auto' onClick={() => iSearch ? handleOffset(false, (iSearch ? 8 : 4)) : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
					</div>
					  <p className='mx-2'>{contadorPagina}</p>
					<div className=' cursor-pointer my-auto ' onClick={() => iSearch ? handleOffset(true, (iSearch ? 8 : 4)): ''}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
					</div>
				</div>
    </div>
  )
}

export default Home
