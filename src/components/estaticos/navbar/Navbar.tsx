import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <Link to="/">
                    <img className='logo' src="https://i.imgur.com/FqSMl3J.png" alt="" />
                </Link>
                    <ul className='list'>
                        <li className='item'>
                            <Link to="/">Home</Link>
                        </li>

                        <li className='item'>
                            <Link to="/hitoria">História</Link>
                        </li>

                        <li className='item'>
                            <Link to="/postagens">Postagens</Link>
                        </li>

                    </ul>


            </nav>
        </>
    )


}


export default Navbar;