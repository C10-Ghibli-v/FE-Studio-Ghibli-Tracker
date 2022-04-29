import React from 'react'
import account from '../assets/icons/account.png'
import back from '../assets/icons/back.png'
import MoviesList from '../pages/MoviesList'
import Movie from '../pages/MoviesList'


const HeaderHome = () => {
  return ( 
    <nav className='p-3 w-full bg-slate-800'>   
        <ul className='flex justify-end gap-2'>
            <li className='flex'>
                
                <a href='../src/pages/MoviesList.jsx'>
                <button className="bg-white hover:bg-gray-300 text-black font-bold px-2 rounded shadow">Iniciar sesión</button>
                </a>
            </li>
            <li className='flex'>
                <a href="/">
                <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-2 rounded shadow">Registrarse</button>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderHome