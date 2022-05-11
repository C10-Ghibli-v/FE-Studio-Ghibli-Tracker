import React from 'react';
import { Link } from "react-router-dom";
import back from '../assets/icons/back.png';
import account from '../assets/icons/account.png';

const Header = () => {
    return(
        <nav className='p-3 w-full bg-slate-800'>
        <ul className='flex'>
            <li className='w-1/6 flex justify-start items-center'>
                <Link to="/MoviesList"><img src={back} alt="back" className="w-5"/></Link>
            </li>
            <li className='barra'>
            </li>
            <li className='flex items-right justify-end w-5/6'>
                <a href="/"><img src={account} alt="perfil" className="w-7" /></a>
            </li>
        </ul>
    </nav>
);
}
  
  export default Header