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
                <button className="bg-white hover:bg-gray-300 text-black px-2 font-bold rounded shadow p-2 m-1 hover:">Iniciar sesión</button>
                </a>
            </li>
            <li className='flex'>
                <a href="/">
                <button className="bg-gradient-to-r from-orange-500 to-violet-600 hover:bg-orange-400 text-white font-bold px-2 rounded shadow p-2 m-1">Registrarse</button>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderHome