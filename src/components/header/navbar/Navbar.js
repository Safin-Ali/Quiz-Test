import React from 'react';
import { NavLink } from 'react-router-dom';
import "./extra-class.css"

const Navbar = () => {
    return (
        <nav className='flex bg-nav shadow justify-between py-5 px-8'>
            <div>
            <NavLink to={'/'}><h3 className='text-4xl'><span className='text-default'>Q</span>uiz Test</h3></NavLink>
            </div>
            <ul className='flex justify-center items-center'>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/subjects'>Subject</NavLink></li>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/statics'>Statics</NavLink></li>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/blog'>Blog</NavLink></li>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/xx'>Error</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;