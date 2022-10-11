import React from 'react';
import { NavLink } from 'react-router-dom';
import "./extra-class.css"

const Navbar = () => {
    return (
        <nav className='flex flex-col sm:flex-row justify-center sm:justify-between bg-nav shadow items-center py-5 px-8'>
            <div>
            <NavLink to={'/home'}><h3 className='text-4xl text-center sm:text-left'><span className='text-default'>Q</span>uiz Test</h3></NavLink>
            </div>
            <ul className='flex justify-center items-center my-4 md:my-0'>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/subjects'>Subject</NavLink></li>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/statics'>Statics</NavLink></li>
                <li className='mx-3'><NavLink className='text-gray-900 nav-link' to='/blog'>Blog</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;