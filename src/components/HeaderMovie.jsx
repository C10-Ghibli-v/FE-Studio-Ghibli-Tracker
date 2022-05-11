import React from 'react';
import {Link} from "react-router-dom";
import account from '../assets/icons/account.png';
import back from '../assets/icons/back.png';


const HeaderMovie = ({search, searchInput, handleSearch}) => {
    return(
        <nav className='p-3 w-full bg-slate-800'>
        <ul className='flex'>
            <li className='w-1/6 flex justify-start items-center'>
                <Link to="/"><img src={back} alt="back" className="w-5"/></Link>
            </li>
            <li className='barra'>
                <div className="Search">
                <input className='w-6/7 px-2 rounded-md w-full placeholder-gray-400' type="text" 
                value={search} ref={searchInput} onChange={handleSearch} placeholder="Search"/>
                </div>
            </li>
            <li className='flex items-right justify-end w-5/6'>
                <Link to="/User"><img src={account} alt="perfil" className="w-7" /></Link>
            </li>
        </ul>
    </nav>
);
}

export default HeaderMovie