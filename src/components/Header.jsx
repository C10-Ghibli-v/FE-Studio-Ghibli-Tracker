import React from 'react';
import account from '../assets/icons/account.png';
import back from '../assets/icons/back.png';


const Header = ({search, searchInput, handleSearch}) => {
    return(
        <nav className='p-3 w-full bg-slate-800'>
        <ul className='flex'>
            <li className='w-1/6 flex justify-start items-center'>
                <a href="/"><img src={back} alt="back" className="w-5"/></a>
            </li>
            <li className='barra'>
                <div className="Search">
                <input className='w-6/7 px-2 rounded-md w-full placeholder-gray-400' type="text" 
                value={search} ref={searchInput} onChange={handleSearch} placeholder="Search"/>
                </div>
            </li>
            <li className='flex items-right justify-end w-5/6'>
                <a href="/"><img src={account} alt="perfil" className="w-7" /></a>
            </li>
        </ul>
    </nav>
);
}

export default Header