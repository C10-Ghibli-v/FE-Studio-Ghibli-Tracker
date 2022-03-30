import React from 'react'
import account from '../assets/icons/account.png'
import back from '../assets/icons/back.png'
import search from '../assets/icons/search.png'

const Header = () => {
  return ( 
    <nav className='p-3 w-full bg-slate-800'>
        <ul className='flex'>
            <li className='w-1/6 flex justify-start items-center'>
                <a href="/"><img src={back} alt="back" className="w-5"/></a>
            </li>
            <li className='flex items-center justify-center w-4/6'>
                <input className='w-6/7 px-2 rounded-md w-full placeholder-gray-400' type="text" placeholder="Search"/>
                <img className="w-7 cursor-pointer pl-2" src={search} alt="search" />
            </li>
            <li className='w-1/6 flex justify-end'>
                <a href="/"><img src={account} alt="perfil" className="w-7" /></a>
            </li>
        </ul>
    </nav>
  )
}

export default Header